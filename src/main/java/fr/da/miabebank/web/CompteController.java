package fr.da.miabebank.web;

import fr.da.miabebank.model.Compte;
import fr.da.miabebank.model.Utilisateur;
import fr.da.miabebank.repository.CompteRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api/comptes")
public class CompteController {

    private CompteRepository compteRepository;
    public CompteController(CompteRepository repo){
        this.compteRepository = repo;
    }

    @GetMapping
    Collection<Compte> comptes() {
        return  compteRepository.findAll();
    }

    @PostMapping
    void save(@RequestBody  Compte compte) {
        compteRepository.save(compte);
    }

    @GetMapping("/{id}")
    ResponseEntity<Compte> getCompte(@PathVariable("id") Long id) {
        Compte compte = compteRepository.findById(id).orElse(new Compte());
        return ResponseEntity.ok().body(compte);
    }

    @DeleteMapping
    void delete(@RequestParam Long id) {
        Optional<Compte> compte = compteRepository.findById(id);
        if(compte.isPresent()) {

            compteRepository.delete(compte.get());
        }
    }



}
