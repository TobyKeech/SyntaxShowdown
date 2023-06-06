package com.syntaxshowdown.syntaxshown.components;

import com.syntaxshowdown.syntaxshown.models.Attack;
import com.syntaxshowdown.syntaxshown.models.Character;
import com.syntaxshowdown.syntaxshown.models.Defence;
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

        Character html = new Character("html", "frontend", 100);
        characterRepository.save(html);
        Character java = new Character("java", "backend", 100);
        characterRepository.save(java);
        Character postgress = new Character("postgress", "database", 100);
        characterRepository.save(postgress);

        Attack gitPush = new Attack("gitPush", 20, html);
        attackRepository.save(gitPush);
        Attack reduce = new Attack("reduce", 30, java);
        attackRepository.save(reduce);
        Attack rmrf = new Attack("rmrf", 10, postgress);
        attackRepository.save(rmrf);

        Defence gitPull = new Defence("gitPull", 30, html);
        defenceRepository.save(gitPull);
        Defence map = new Defence("map", 10, java);
        defenceRepository.save(map);
        Defence filter = new Defence("gitPull", 25, postgress);
        defenceRepository.save(filter);

//        html.addAttack(gitPush);
//        html.addAttack(reduce);
//        html.addAttack(rmrf);
//        characterRepository.save(html);
//
//        html.addDefence(gitPull);
//        html.addDefence(map);
//        html.addDefence(filter);
//        characterRepository.save(html);


    }
}
