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
//@Component //Comment this out if you do not to run the data loader.
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

        Character html = new Character("HTML", "frontend", 100, "https://i.ibb.co/GWN62pv/html.png  ");
        characterRepository.save(html);
        Character css = new Character("CSS", "frontend", 100, "https://i.ibb.co/fQJwZ71/css.png");
        characterRepository.save(css);
        Character js = new Character("Javascript", "frontend", 100, "https://i.ibb.co/0JZJc5d/js.png");
        characterRepository.save(js);

        Character java = new Character("Java", "backend", 100, "https://i.ibb.co/zrrJDDs/java.png" );
        characterRepository.save(java);
        Character python = new Character("Python", "backend", 100, "https://i.ibb.co/QkhfLt0/py.png");
        characterRepository.save(python);
        Character ruby = new Character("Ruby", "backend", 100, "https://i.ibb.co/9TPXD6B/ruby.png");
        characterRepository.save(ruby);

        Character postgres = new Character("Postgres", "database", 100, "https://i.ibb.co/x3MHXS7/postgres.png");
        characterRepository.save(postgres);
        Character mongo = new Character("Mongodb", "database", 100, "https://i.ibb.co/wz7NZ8Q/mongodb.png");
        characterRepository.save(mongo);
        Character arango = new Character("Arangodb", "database", 100, "https://i.ibb.co/Q8khmfn/arangodb.png");
        characterRepository.save(arango);

        Attack marquee = new Attack("Marquee Punch", -30, html);
        attackRepository.save(marquee);
        Attack deprecation = new Attack("Deprecation", -10, html);
        attackRepository.save(deprecation);

        Attack flexbox = new Attack("Streams", -30, css);
        attackRepository.save(flexbox);
        Attack centrediv = new Attack("Centre Div", -10, css);
        attackRepository.save(centrediv);

        Attack reduce = new Attack("Reduce", -30, js);
        attackRepository.save(reduce);
        Attack execute = new Attack("Execute", -10, js);
        attackRepository.save(execute);

        Attack streams = new Attack("Streams", -30, java);
        attackRepository.save(streams);
        Attack statictype = new Attack("StaticType", -10, java);
        attackRepository.save(statictype);

        Attack listcomp = new Attack("List Comprehension", -30, python);
        attackRepository.save(listcomp);
        Attack snakeCharmer = new Attack("SnakeCharmer", -10, python);
        attackRepository.save(snakeCharmer);

        Attack findenemy = new Attack("FIND Enemy", -30, postgres);
        attackRepository.save(findenemy);
        Attack droptable = new Attack("Droptable", -10, postgres);
        attackRepository.save(droptable);

        Attack dropuser = new Attack("dropUser", -30, mongo);
        attackRepository.save(dropuser);
        Attack runCommand = new Attack("runCommand", -10, mongo);
        attackRepository.save(runCommand);

        Attack syntaxerror = new Attack("Syntax Error", -30, arango);
        attackRepository.save(syntaxerror);
        Attack throwSeed = new Attack("Throw Seed", -10, arango);
        attackRepository.save(throwSeed);

        Attack gem = new Attack("Gem", -30, ruby);
        attackRepository.save(gem);
        Attack puts = new Attack("Puts", -10, ruby);
        attackRepository.save(puts);

        Defence hr = new Defence("Hr", 30, html);
        defenceRepository.save(hr);
        Defence header = new Defence("Header", 10, html);
        defenceRepository.save(header);

        Defence grid = new Defence("Grid", 30, css);
        defenceRepository.save(grid);
        Defence hover = new Defence("Hover", 10, css);
        defenceRepository.save(hover);

        Defence instandRefresh = new Defence("Instant Refresh", 30, js);
        defenceRepository.save(instandRefresh);
        Defence filter = new Defence("Filter", 10, js);
        defenceRepository.save(filter);

        Defence nullpointer = new Defence("Nullpointer Exception", 30, java);
        defenceRepository.save(nullpointer);
        Defence jsonignore = new Defence("@Jsonignore", 10, java);
        defenceRepository.save(jsonignore);

        Defence pythonglobalinterperlog = new Defence("Python Global Interpreter Log", 30, python);
        defenceRepository.save(pythonglobalinterperlog);
        Defence charm = new Defence("Charm", 10, python);
        defenceRepository.save(charm);

        Defence deflect = new Defence("Deflect", 30, ruby);
        defenceRepository.save(deflect);
        Defence rebound = new Defence("Rebound", 10, ruby);
        defenceRepository.save(rebound);

        Defence wheredefence = new Defence("WHERE Defence", 30, postgres);
        defenceRepository.save(wheredefence);
        Defence createt = new Defence("Create Table", 10, postgres);
        defenceRepository.save(createt);

        Defence repel = new Defence("Repel", 30, mongo);
        defenceRepository.save(repel);
        Defence cleanUp = new Defence("cleanUp", 10, mongo);
        defenceRepository.save(cleanUp);

        Defence arangosh = new Defence("Arangosh", 30, arango);
        defenceRepository.save(arangosh);
        Defence ripe = new Defence("Ripe", 10, arango);
        defenceRepository.save(ripe);

    }
}
