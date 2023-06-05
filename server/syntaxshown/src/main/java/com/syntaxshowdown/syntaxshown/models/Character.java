package com.syntaxshowdown.syntaxshown.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "characters")
public class Character{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "type")
    private String type;

    @Column(name = "hp")
    private int hp;

    @JsonIgnoreProperties({"character"})
    @OneToMany(mappedBy = "character")
    private List<Attack>attackList;

    @JsonIgnoreProperties({"character"})
    @OneToMany(mappedBy = "character")
    private List<Defence>defenceList;

    public Character(String name, String type, int hp) {
        this.name = name;
        this.type = type;
        this.hp = hp;
        this.attackList = new ArrayList<Attack>();
        this.defenceList = new ArrayList<Defence>();
    }

    public Character() {
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getHp() {
        return hp;
    }

    public void setHp(int hp) {
        this.hp = hp;
    }

    public List<Attack> getAttackList() {
        return attackList;
    }

    public void setAttackList(List<Attack> attackList) {
        this.attackList = attackList;
    }

    public List<Defence> getDefenceList() {
        return defenceList;
    }

    public void setDefenceList(List<Defence> defenceList) {
        this.defenceList = defenceList;
    }

    public void addAttack(Attack attack){
        this.attackList.add(attack);
    }

    public void addDefence(Defence defence){
        this.defenceList.add(defence);
    }

    public int getNoOfAttacks(){
        return this.attackList.size();
    }

    public int getNoOfDefences(){
        return this.defenceList.size();
    }
}
