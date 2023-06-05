package com.syntaxshowdown.syntaxshown.models;

public enum Defence {

    JSONIGNORE(10),
    GITPUSH(20),
    GUARD(20),
    FETCH(20);

    private int defencevalue;

    Defence(int defencevalue) {
        this.defencevalue = defencevalue;
    }
}
