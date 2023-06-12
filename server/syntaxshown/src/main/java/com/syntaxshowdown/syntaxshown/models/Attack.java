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
    @Column(name = "value")
    private int value;

    @ManyToOne
    @JoinColumn(name = "character_id", nullable = false)
    private Character character;

    public Attack(String name, int value, Character character) {
        this.name = name;
        this.value = value;
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

    public int getValue() {
        return this.value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public Character getCharacter() {
        return character;
    }

    public void setCharacter(Character character) {
        this.character = character;
    }
}
