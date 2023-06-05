package com.syntaxshowdown.syntaxshown.repositories;

import com.syntaxshowdown.syntaxshown.models.Character;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CharacterRepository extends JpaRepository<Character, Long> {
}
