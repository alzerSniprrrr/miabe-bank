package fr.da.miabebank.repository;

import fr.da.miabebank.model.Virement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VirementRepository extends JpaRepository<Virement, Long> {
}
