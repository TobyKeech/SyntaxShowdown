package com.syntaxshowdown.syntaxshown;

import com.syntaxshowdown.syntaxshown.models.Attack;
import com.syntaxshowdown.syntaxshown.models.Character;
import com.syntaxshowdown.syntaxshown.models.Defence;
import com.syntaxshowdown.syntaxshown.repositories.AttackRepository;
import com.syntaxshowdown.syntaxshown.repositories.CharacterRepository;
import com.syntaxshowdown.syntaxshown.repositories.DefenceRepository;
import org.checkerframework.checker.units.qual.A;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.web.servlet.tags.form.AbstractFormTag;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class SyntaxshownApplicationTests {

	@Autowired
	CharacterRepository characterRepository;

	@Autowired
	AttackRepository attackRepository;

	@Autowired
	DefenceRepository defenceRepository;

	@Test
	void contextLoads() {
	}

	@Test
	void canSaveCharacter() {
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

		Attack markePunch = new Attack("MarkePunch", 20, html);
		attackRepository.save(markePunch);
		Attack text = new Attack("Test", 20, html);
		attackRepository.save(text);

		Attack flexbox = new Attack("Streams", 30, css);
		attackRepository.save(flexbox);
		Attack centrediv = new Attack("Centre Div", 10, css);
		attackRepository.save(centrediv);

		Attack reduce = new Attack("Reduce", 30, js);
		attackRepository.save(reduce);
		Attack execute = new Attack("Execute", 10, js);
		attackRepository.save(execute);

		Attack streams = new Attack("Streams", 20, java);
		attackRepository.save(streams);
		Attack statictype = new Attack("StaticType", 20, java);
		attackRepository.save(statictype);

		Attack listcomp = new Attack("List Comprehension", 30, python);
		attackRepository.save(listcomp);
		Attack snakeCharmer = new Attack("snakeCharmer", 10, python);
		attackRepository.save(snakeCharmer);

		Attack findenemy = new Attack("FIND enemy", 30, postgres);
		attackRepository.save(findenemy);
		Attack droptable = new Attack("Droptable", 10, postgres);
		attackRepository.save(droptable);

		Attack create = new Attack("Create", 20, mongo);
		attackRepository.save(create);
		Attack upload = new Attack("Upload", 20, mongo);
		attackRepository.save(upload);

		Attack syntaxerror = new Attack("Syntax Error", 30, arango);
		attackRepository.save(syntaxerror);
		Attack logic = new Attack("Logic", 10, arango);
		attackRepository.save(logic);

		Attack derp = new Attack("Derp", 30, ruby);
		attackRepository.save(derp);
		Attack shiny = new Attack("Shiny", 10, ruby);
		attackRepository.save(shiny);

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
		Defence filter = new Defence("Filter", 30, js);
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
		Defence rebound = new Defence("Rebound", 30, ruby);
		defenceRepository.save(rebound);

		Defence wheredefence = new Defence("WHERE Defence", 30, postgres);
		defenceRepository.save(wheredefence);
		Defence createt = new Defence("Create Table", 10, postgres);
		defenceRepository.save(createt);

		Defence reflect = new Defence("Reflect", 30, mongo);
		defenceRepository.save(reflect);
		Defence block = new Defence("Block", 10, mongo);
		defenceRepository.save(block);

		Defence bigseed = new Defence("Big Seed", 30, arango);
		defenceRepository.save(bigseed);
		Defence avacado = new Defence("Avacado", 30, arango);
		defenceRepository.save(avacado);

	}



}
