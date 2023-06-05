package com.syntaxshowdown.syntaxshown.models;

import java.util.ArrayList;
import java.util.List;

public class Characters {

    private String name;

    private String type;

    private int hp;

    private List<Attack>attackList;
    private List<Defence>defenceList;

    public Characters(String name, String type, int hp) {
        this.name = name;
        this.type = type;
        this.hp = hp;
        this.attackList = new ArrayList<Attack>();
        this.defenceList = new ArrayList<Defence>();
    }

    public Characters() {
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
}
