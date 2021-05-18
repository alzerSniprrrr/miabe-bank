package fr.da.miabebank.model;

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
    private int solde;
    @Column
    private int seuilDecouvert;
    @Column
    private int montant_max_virement;
    @Column
    private Date dateCreation;
    @Column
    private int duree_max_decouvert;
    @Column
    private Date date_decouvert;
    @Column(unique = true)
    private String IBAN;
    @Column
    private String BIC;
    @Column
    private String etat_compte;

    @OneToMany(mappedBy = "compte")
    private List<Beneficiaire> beneficiares = new ArrayList<Beneficiaire>();

    @OneToMany(mappedBy = "compte")
    private List<Virement> virements = new ArrayList<Virement>();
    @ManyToOne
    @JoinColumn(name = "utilisateur_fk")
    private Utilisateur client;



}
