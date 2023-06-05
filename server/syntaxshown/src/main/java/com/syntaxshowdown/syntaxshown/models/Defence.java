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

    Defence(int defencevalue) {
        this.defencevalue = defencevalue;
    }

    public int getDefencevalue() {
        return defencevalue;
    }

}
