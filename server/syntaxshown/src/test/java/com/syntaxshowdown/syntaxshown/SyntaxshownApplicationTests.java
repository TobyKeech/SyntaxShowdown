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


	}



}
