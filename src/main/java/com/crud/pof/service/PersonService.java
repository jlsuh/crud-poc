package com.crud.pof.service;

import com.crud.pof.model.exception.PersonNotFoundException;
import com.crud.pof.model.Person;
import com.crud.pof.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class PersonService {
    private final PersonRepository personRepository;

    @Autowired
    public PersonService(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    public Person addPerson(Person person) {
        return this.personRepository.save(person);
    }

    public List<Person> getPersons() {
        return StreamSupport
                .stream(personRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
    }

    public Person getPerson(Long id) {
        return personRepository.findById(id).orElseThrow(() ->
                new PersonNotFoundException(id));
    }

    public Person deletePerson(Long id) {
        Person person = this.getPerson(id);
        personRepository.delete(person);
        return person;
    }

    public Person editPerson(Long id, Person person) {
        // Attached/ManagedEntity: no need to explicitly save
        Person personToEdit = this.getPerson(id);
        personToEdit.setFirstName(person.getFirstName());
        personToEdit.setLastName(person.getLastName());
        personToEdit.setAge(person.getAge());
        return personToEdit;
    }
}
