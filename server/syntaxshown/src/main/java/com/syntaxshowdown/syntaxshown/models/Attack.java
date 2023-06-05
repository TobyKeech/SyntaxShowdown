package com.syntaxshowdown.syntaxshown.models;


import org.springframework.data.repository.cdi.Eager;

import javax.persistence.*;

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

    Attack(int attackvalue) {
        this.attackvalue = attackvalue;
    }

    Attack() {
    }

    public int getAttackvalue() {
        return attackvalue;
    }

}
