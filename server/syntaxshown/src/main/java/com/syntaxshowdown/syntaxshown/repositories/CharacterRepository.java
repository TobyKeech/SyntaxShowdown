package com.syntaxshowdown.syntaxshown.repositories;

import com.syntaxshowdown.syntaxshown.models.Character;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CharacterRepository extends JpaRepository<Character, Long> {

    List<Character> findByName (String name);
}
