package com.syntaxshowdown.syntaxshown;

import com.syntaxshowdown.syntaxshown.repositories.AttackRepository;
import com.syntaxshowdown.syntaxshown.repositories.CharacterRepository;
import com.syntaxshowdown.syntaxshown.repositories.DefenceRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

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
	void canSaveCharacter(){

	}

}
