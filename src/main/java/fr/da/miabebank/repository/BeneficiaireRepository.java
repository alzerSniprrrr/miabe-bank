package fr.da.miabebank.repository;

import fr.da.miabebank.model.Beneficiaire;
import fr.da.miabebank.model.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BeneficiaireRepository extends JpaRepository<Beneficiaire, Long> {
    Optional<Beneficiaire> findByIban(String iban);
}
