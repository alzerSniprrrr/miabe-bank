package fr.da.miabebank;

import fr.da.miabebank.model.Utilisateur;
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
    private static final Logger logger = LoggerFactory.getLogger(Initializer.class);

    public Initializer(UtilisateurRepository repository, BCryptPasswordEncoder encoder) {
        this.repository = repository;
        this.bCryptPasswordEncoder = encoder;
    }

    @Override
    public void run(String... strings) {


         for (int i = 1; i < 5; i++) {
                    Utilisateur user = new Utilisateur(null,"test" + i, "testprenom" + i, "test" + i + "@test.com", this.bCryptPasswordEncoder.encode("test" + i), false,null);
                    if(i==1){
                        user.setAdmin(true);
                    }
                    repository.save(user);
         }

        for (int i = 1; i < 5; i++) {
            logger.info(""+repository.findByEmail("test" + i + "@test.com").isPresent());

        }

    }

}
