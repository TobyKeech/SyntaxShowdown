package com.syntaxshowdown.syntaxshown.models;

import javax.persistence.*;

@Entity
@Table(name = "defences")
public enum Defence {

    @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)

    JSONIGNORE(10),
    GITPUSH(20),
    GUARD(20),
    FETCH(20);

    private Long id;
    @Column(name = "defencevalue")
    private int defencevalue;

    @ManyToOne
    @JoinColumn(name = "character_id", nullable = false)
    private Character character;

    Defence(int defencevalue) {
        this.defencevalue = defencevalue;
    }

    Defence() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setDefencevalue(int defencevalue) {
        this.defencevalue = defencevalue;
    }

    public Character getCharacter() {
        return character;
    }

    public void setCharacter(Character character) {
        this.character = character;
    }

    public int getDefencevalue() {
        return defencevalue;
    }

}
