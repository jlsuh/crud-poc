package com.crud.poc.controller;

import com.crud.poc.model.Person;
import com.crud.poc.model.dto.PersonDTO;
import com.crud.poc.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/persons")
public class PersonController {
    private final PersonService personService;

    @Autowired
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @PostMapping
    public ResponseEntity<PersonDTO> addPerson(@RequestBody final PersonDTO personDTO) {
        Person person = personService.addPerson(Person.from(personDTO));
        return new ResponseEntity<>(PersonDTO.from(person), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<PersonDTO>> getPersons() {
        List<Person> persons = personService.getPersons();
        List<PersonDTO> personsDTO = persons.stream().map(PersonDTO::from).collect(Collectors.toList());
        return new ResponseEntity<>(personsDTO, HttpStatus.OK);
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<PersonDTO> getPerson(@PathVariable final Long id) {
        Person person = personService.getPerson(id);
        return new ResponseEntity<>(PersonDTO.from(person), HttpStatus.OK);
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<PersonDTO> deletePerson(@PathVariable final Long id) {
        Person person = personService.deletePerson(id);
        return new ResponseEntity<>(PersonDTO.from(person), HttpStatus.OK);
    }

    @PutMapping(value = "{id}")
    public ResponseEntity<PersonDTO> editPerson(@PathVariable final Long id,
                                                @RequestBody final PersonDTO personDTO) {
        Person editedPerson = personService.editPerson(id, Person.from(personDTO));
        return new ResponseEntity<>(PersonDTO.from(editedPerson), HttpStatus.OK);
    }
}
