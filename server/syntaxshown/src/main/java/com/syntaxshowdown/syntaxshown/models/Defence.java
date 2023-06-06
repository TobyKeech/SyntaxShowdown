package com.syntaxshowdown.syntaxshown.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "defences")
public class Defence {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    @Column(name = "name")
    private String name;
    @Column(name = "defencevalue")
    private int defencevalue;



    public Defence(String name, int defencevalue) {
        this.name = name;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDefencevalue(int defencevalue) {
        this.defencevalue = defencevalue;
    }

    public int getDefencevalue() {
        return defencevalue;
    }

}
