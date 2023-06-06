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

		html.addAttack(gitPush);
		html.addAttack(reduce);
		html.addAttack(rmrf);
		characterRepository.save(html);

		html.addDefence(gitPull);
		html.addDefence(map);
		html.addDefence(filter);
		characterRepository.save(html);


	}



}
