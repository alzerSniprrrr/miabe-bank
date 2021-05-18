package fr.da.miabebank.service;

import fr.da.miabebank.model.Utilisateur;
import fr.da.miabebank.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UserDetailsRepositoryReactiveAuthenticationManager;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

@Service
public class UtilisateurService implements UserDetailsService {
    @Autowired
    private UtilisateurRepository utilisateurRepository;
    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        Objects.requireNonNull(s);
        Utilisateur user = utilisateurRepository.findByEmail(s).orElseThrow(
                () -> new UsernameNotFoundException("User not found")
        );
        return null;
    }

    public Optional<Utilisateur> findById(Long id){
        return utilisateurRepository.findById(id);
    }

}
