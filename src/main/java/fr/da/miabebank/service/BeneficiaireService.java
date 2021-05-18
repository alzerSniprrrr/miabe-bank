package fr.da.miabebank.service;

import fr.da.miabebank.model.Beneficiaire;
import fr.da.miabebank.repository.BeneficiaireRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class BeneficiaireService {
    @Autowired
    private BeneficiaireRepository beneficiaireRepository;

    public Optional<Beneficiaire> findByIban(String iban){
        return beneficiaireRepository.findByIban( iban);
    }
}
