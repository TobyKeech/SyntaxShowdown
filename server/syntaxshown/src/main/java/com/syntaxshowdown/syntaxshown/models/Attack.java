package com.syntaxshowdown.syntaxshown.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.repository.cdi.Eager;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "attacks")
public enum Attack {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    DICTIONARY(50),
    CONST(50),
    RMRF(20),
    MAP(10),
    ARRAY(10),
    LET(10),
    REDUCE(20);

    private Long id;
    @Column(name = "attackvalue")
    private int attackvalue;

    @ManyToOne
    @JoinColumn(name = "attack_id", nullable = false)
    private Attack attack;

    @ManyToOne
    @JoinColumn(name = "defence_id", nullable = false)
    private Defence defence;

    Attack(int attackvalue) {
        this.attackvalue = attackvalue;
    }

    Attack() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setAttackvalue(int attackvalue) {
        this.attackvalue = attackvalue;
    }

    public Defence getDefence() {
        return defence;
    }

    public void setDefence(Defence defence) {
        this.defence = defence;
    }

    public Attack getAttack() {
        return attack;
    }

    public int getAttackvalue() {
        return attackvalue;
    }

}
