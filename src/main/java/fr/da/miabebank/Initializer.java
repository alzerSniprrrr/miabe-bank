package fr.da.miabebank;

import fr.da.miabebank.model.Beneficiaire;
import fr.da.miabebank.model.Utilisateur;
import fr.da.miabebank.repository.BeneficiaireRepository;
import fr.da.miabebank.repository.UtilisateurRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class Initializer implements CommandLineRunner {
    private final UtilisateurRepository repository;
    private  final BeneficiaireRepository beneficiaireRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public Initializer(UtilisateurRepository repository, BCryptPasswordEncoder encoder, BeneficiaireRepository beneficiaireRepository) {
        this.repository = repository;
        this.beneficiaireRepository = beneficiaireRepository;
        this.bCryptPasswordEncoder = encoder;
    }

    @Override
    public void run(String... strings) {

        for (int i = 1; i < 5; i++) {
            Utilisateur user = new Utilisateur("test" + i, "test" + i + "@test.com", this.bCryptPasswordEncoder.encode("test" + i));
            if(i==1){
                user.setAdmin(true);
            }
            repository.save(user);
            Beneficiaire beneficiaire = new Beneficiaire("FR76JDHFHHHHF" +i, "Toto");
            beneficiaire.setPrenom("Toto");
           beneficiaireRepository.save(beneficiaire);
           System.out.println("one is created");
        }

    }
}
