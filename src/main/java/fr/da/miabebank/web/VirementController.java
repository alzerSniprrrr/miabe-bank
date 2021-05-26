package fr.da.miabebank.web;

import fr.da.miabebank.model.Compte;
import fr.da.miabebank.model.Virement;
import fr.da.miabebank.repository.CompteRepository;
import fr.da.miabebank.repository.VirementRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api/virements")
public class VirementController {

    private VirementRepository virementRepository;
    public VirementController(VirementRepository repo){
        this.virementRepository = repo;
    }

    @GetMapping
    Collection<Virement> virements() {
        return  virementRepository.findAll();
    }

    @PostMapping
    void save(@RequestBody Virement virement) {
        virementRepository.save(virement);
    }

    @DeleteMapping
    void delete(@RequestParam Long id) {
        Optional<Virement> virement = virementRepository.findById(id);
        if(virement.isPresent()) {

            virementRepository.delete(virement.get());
        }
    }
}
