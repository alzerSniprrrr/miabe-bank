package fr.da.miabebank.repository;

import fr.da.miabebank.model.AuthToken;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AuthTokenRepository extends JpaRepository<AuthToken, String> {
    List<AuthToken> findByUserId(Long userId);
}
