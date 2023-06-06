package com.syntaxshowdown.syntaxshown.controllers;

import com.syntaxshowdown.syntaxshown.models.Character;
import com.syntaxshowdown.syntaxshown.repositories.CharacterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CharacterController {

    @Autowired
    CharacterRepository characterRepository;

    @GetMapping(value = "/characters")
    public ResponseEntity<List<Character>> getAllCharactersOrByName(
            @RequestParam(name = "name", required = false) String name){
        if(name != null){
            return new ResponseEntity<>(characterRepository.findByName(name), HttpStatus.OK);
        }
        return new ResponseEntity<>(characterRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/characters/{id}")
    public ResponseEntity getCharacter(@PathVariable Long id){
        return new ResponseEntity(characterRepository.findById(id), HttpStatus.OK);
    }

}
