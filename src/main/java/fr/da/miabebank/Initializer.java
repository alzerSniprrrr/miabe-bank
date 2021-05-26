package fr.da.miabebank;

import fr.da.miabebank.model.Beneficiaire;
import fr.da.miabebank.model.Utilisateur;
import fr.da.miabebank.repository.BeneficiaireRepository;
import fr.da.miabebank.repository.UtilisateurRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class Initializer implements CommandLineRunner {
    private final UtilisateurRepository repository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final BeneficiaireRepository beneficiaireRepository;
    private static final Logger logger = LoggerFactory.getLogger(Initializer.class);

    public Initializer(UtilisateurRepository repository, BCryptPasswordEncoder encoder, BeneficiaireRepository beneficiaireRepository) {
        this.repository = repository;
        this.bCryptPasswordEncoder = encoder;
        this.beneficiaireRepository = beneficiaireRepository;
    }

    @Override
    public void run(String... strings) {


      /*   for (int i = 1; i < 5; i++) {

             Beneficiaire beneficiaire = new Beneficiaire("FFFFTEZEZEFEZ"+i, "toto");
             beneficiaire.setPrenom("toto");
             beneficiaireRepository.save(beneficiaire);
         }*/


    }

}
