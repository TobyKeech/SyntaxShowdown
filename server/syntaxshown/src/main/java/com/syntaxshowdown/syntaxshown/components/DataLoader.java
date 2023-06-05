package com.syntaxshowdown.syntaxshown.components;

import com.syntaxshowdown.syntaxshown.models.Attack;
import com.syntaxshowdown.syntaxshown.models.Character;
import com.syntaxshowdown.syntaxshown.repositories.AttackRepository;
import com.syntaxshowdown.syntaxshown.repositories.CharacterRepository;
import com.syntaxshowdown.syntaxshown.repositories.DefenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

@Profile("!test")
@Component //Comment this out if you do not to run the data loader.
public class DataLoader implements ApplicationRunner {

    @Autowired
    CharacterRepository characterRepository;

    @Autowired
    AttackRepository attackRepository;

    @Autowired
    DefenceRepository defenceRepository;


    public DataLoader() {

    }
    public void run(ApplicationArguments args) {


    }
}
