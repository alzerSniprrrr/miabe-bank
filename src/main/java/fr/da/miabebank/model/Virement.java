package fr.da.miabebank.model;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Getter
@Setter
public class Virement {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    protected Long idVirement;

    @Column
    @Temporal(javax.persistence.TemporalType.DATE)
    protected Date dateVirement;

    @ManyToOne
    @JoinColumn(name = "compte_fk")
    protected Compte compte;

    @Column
    private String type;

    @Column
    private double montant;

    @Column
    private String motif;

    @ManyToOne
    @JoinColumn(name = "beneficiare_fk")
    protected Beneficiaire beneficiare;
}
