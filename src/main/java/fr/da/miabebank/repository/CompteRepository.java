package fr.da.miabebank.repository;


import fr.da.miabebank.model.Compte;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompteRepository extends JpaRepository<Compte, Long> {
}
