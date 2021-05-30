package fr.da.miabebank.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Getter
@Setter
public class Compte {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idCompte;

    @Column
    private String type;
    @Column
    private double solde;
    @Column
    private Date dateCreation;
    @Column(unique = true)
    private String IBAN;
    @Column
    private String etat_compte;

    @OneToMany(mappedBy = "compte")
    @JsonIgnore
    private List<Beneficiaire> beneficiaires = new ArrayList<Beneficiaire>();

    @OneToMany(mappedBy = "compte")
    @JsonIgnore
    private List<Virement> virements = new ArrayList<Virement>();
    @ManyToOne
    @JoinColumn(name = "utilisateur_fk")
    @JsonIgnore
    private Utilisateur client;



}
