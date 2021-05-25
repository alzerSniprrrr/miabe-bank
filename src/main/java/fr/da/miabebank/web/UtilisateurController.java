package fr.da.miabebank.web;

import fr.da.miabebank.model.AuthToken;
import fr.da.miabebank.model.Utilisateur;
import fr.da.miabebank.repository.AuthTokenRepository;
import fr.da.miabebank.repository.UtilisateurRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.UUID;

@RestController
@RequestMapping("/api/utilisateur")
public class UtilisateurController {
    private final Logger log = LoggerFactory.getLogger(UtilisateurController.class);

    @Autowired
    private AuthTokenRepository authTokenRepository;
    @Autowired
    private UtilisateurRepository userRepository;

    @Value("${fr.da.auth.token}")
    private String authToken;

    @Value("${fr.da.auth.expired}")
    private int expiredTime;


    @Autowired
    private AuthenticationManager authenticationManager;


    @GetMapping("/current")
    ResponseEntity<Utilisateur> getUserConnected(Authentication authentication) {
        Utilisateur user = (Utilisateur) authentication.getPrincipal();
        return ResponseEntity.ok().body(user);
    }

    @GetMapping("/{id}")
    ResponseEntity<Utilisateur> getUserConnected(@PathVariable("id") Long id) {
        Utilisateur user = userRepository.findById(id).orElse(new Utilisateur());
        return ResponseEntity.ok().body(user);
    }


    @PostMapping("/login")
    public void login(@RequestParam String username, @RequestParam String password, HttpServletResponse response) throws IOException {
        try {
            final Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            username,
                            password
                    )
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);
            final Utilisateur user = (Utilisateur) authentication.getPrincipal();
            String sessionId = UUID.randomUUID().toString();
            Date expiredDate = new Date(System.currentTimeMillis() + expiredTime);
            AuthToken token = new AuthToken(sessionId, user.getIdUtilisateur(), expiredDate);
            authTokenRepository.save(token);
            log.info("new session : {} expired in {} user {}", token.getToken(), token.getExpiredDate().toString(), user.getUsername());

            Cookie tokenCookie = new Cookie(authToken, token.getToken());
            tokenCookie.setPath("/");
            tokenCookie.setHttpOnly(true);
            tokenCookie.setMaxAge(expiredTime);
            response.addCookie(tokenCookie);
            response.sendRedirect("/livredor");
        } catch (Exception e) {
            response.sendError(HttpStatus.LOCKED.value());
        }

    }
}
