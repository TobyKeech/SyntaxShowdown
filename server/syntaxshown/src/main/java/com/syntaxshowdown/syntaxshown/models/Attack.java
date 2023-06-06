package com.syntaxshowdown.syntaxshown.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.repository.cdi.Eager;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "attacks")

public class Attack {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;
    @Column(name = "attackvalue")
    private int attackvalue;

    @ManyToOne
    @JoinColumn(name = "attack_id", nullable = false)
    private Attack attack;

    @ManyToOne
    @JoinColumn(name = "defence_id", nullable = false)
    private Defence defence;

    public Attack(String name, int attackvalue) {
        this.name = name;
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

    public Attack getAttack() {
        return attack;
    }

    public void setAttack(Attack attack) {
        this.attack = attack;
    }

    public Defence getDefence() {
        return defence;
    }

    public void setDefence(Defence defence) {
        this.defence = defence;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAttackvalue() {
        return this.attackvalue;
    }

    public void setAttackvalue(int attackvalue) {
        this.attackvalue = attackvalue;
    }

}
