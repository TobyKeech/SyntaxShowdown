package com.syntaxshowdown.syntaxshown.repositories;

import com.syntaxshowdown.syntaxshown.models.Attack;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttackRepository  extends JpaRepository<Attack, Long> {
}
