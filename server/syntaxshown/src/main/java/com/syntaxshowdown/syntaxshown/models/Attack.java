package com.syntaxshowdown.syntaxshown.models;

public enum Attack {

    DICTIONARY(50),
    CONST(50),
    RMRF(20),
    MAP(10),
    ARRAY(10),
    LET(10),
    REDUCE(20);
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
