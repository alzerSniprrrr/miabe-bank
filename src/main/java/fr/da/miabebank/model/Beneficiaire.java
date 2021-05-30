package fr.da.miabebank.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Getter
@Setter
public class Beneficiaire {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idBeneficiaire;
    private  String iban;
    private String nom;
    private String prenom;
    @ManyToOne
    @JoinColumn(name = "compte_fk")
    @JsonIgnore
    private Compte compte;
    public Beneficiaire(String iban, String nom) {
        this.iban = iban;
        this.nom = nom;
    }
}
