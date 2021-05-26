package fr.da.miabebank.web;

import fr.da.miabebank.model.Beneficiaire;
import fr.da.miabebank.repository.BeneficiaireRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api/beneficiaires")
@CrossOrigin(origins = "http://localhost:1234")
public class BeneficiaireController {

    private BeneficiaireRepository beneficiaireRepository;
    public BeneficiaireController(BeneficiaireRepository repo){
        this.beneficiaireRepository = repo;
    }

    @GetMapping
    Collection<Beneficiaire> beneficiaires() {
        return  beneficiaireRepository.findAll();
    }

    @PostMapping("/add")
    void save(@RequestBody Beneficiaire beneficiaire) {
        beneficiaireRepository.save(beneficiaire);
    }

    @DeleteMapping
    void delete(@RequestParam Long id) {
        Optional<Beneficiaire> beneficiaire = beneficiaireRepository.findById(id);
        if(beneficiaire.isPresent()) {

            beneficiaireRepository.delete(beneficiaire.get());
        }
    }
}

