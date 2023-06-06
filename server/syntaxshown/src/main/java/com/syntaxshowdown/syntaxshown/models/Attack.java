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
    @JsonIgnoreProperties({"defences"})
    @JoinColumn(name = "character_id", nullable = false)
    private Character character;

    public Attack(String name, int attackvalue, Character character) {
        this.name = name;
        this.attackvalue = attackvalue;
        this.character = character;
    }

    Attack() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Character getCharacter() {
        return character;
    }

    public void setCharacter(Character character) {
        this.character = character;
    }
}
