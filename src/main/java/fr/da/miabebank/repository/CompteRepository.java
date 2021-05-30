package fr.da.miabebank.repository;


import fr.da.miabebank.model.Compte;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;
import java.util.List;

public interface CompteRepository extends JpaRepository<Compte, Long> {

    @Query("SELECT  c  from Compte c WHERE c.client.idUtilisateur = ?1")
    List<Compte> findByClient(Long id);
}
