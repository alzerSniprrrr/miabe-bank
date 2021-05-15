package fr.da.miabebank.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Beneficiaire {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idBeneficiaire;
    private  String iban;
    private String nom;
    private String prenom;

    public Beneficiaire(String iban, String nom) {
        this.iban = iban;
        this.nom = nom;
    }
}
