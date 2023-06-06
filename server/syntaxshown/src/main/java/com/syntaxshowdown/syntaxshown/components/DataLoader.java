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

        Character html = new Character("HTML", "frontend", 100, "../assets/html.svg");
        characterRepository.save(html);
        Character css = new Character("CSS", "frontend", 100, "../assets/css.svg");
        characterRepository.save(css);
        Character js = new Character("Javascript", "frontend", 100, "../assets/javascript.svg");
        characterRepository.save(js);

        Character java = new Character("Java", "backend", 100, "../assets/java.svg" );
        characterRepository.save(java);
        Character python = new Character("Python", "backend", 100, "../assets/python.svg");
        characterRepository.save(python);
        Character ruby = new Character("Ruby", "backend", 100, "../assets/ruby.svg");
        characterRepository.save(ruby);

        Character postgres = new Character("Postgres", "database", 100, "../assets/postgres.svg");
        characterRepository.save(postgres);
        Character mongo = new Character("Mongodb", "database", 100, "../assets/mongodb.svg");
        characterRepository.save(mongo);
        Character arango = new Character("Arangodb", "database", 100, "../assets/arangodb.svg");
        characterRepository.save(arango);

        Attack gitPush = new Attack("GitPush", 20, html);
        attackRepository.save(gitPush);
        Attack reduce = new Attack("Reduce", 30, java);
        attackRepository.save(reduce);
        Attack rmrf = new Attack("Rmrf", 10, postgres);
        attackRepository.save(rmrf);

        Defence gitPull = new Defence("GitPull", 30, html);
        defenceRepository.save(gitPull);
        Defence map = new Defence("Map", 10, java);
        defenceRepository.save(map);
        Defence filter = new Defence("GitPull", 25, postgres);
        defenceRepository.save(filter);


    }
}
