package com.crud.pof.model;

import com.crud.pof.model.dto.PersonDTO;

import javax.persistence.*;

@Entity
@Table(name = "person")
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private Byte age;

    // Hibernate constructor
    public Person() {
    }

    public Person(String firstName, String lastName, Byte age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public static Person from(PersonDTO personDTO) {
        return new Person(
                personDTO.getFirstName(),
                personDTO.getLastName(),
                personDTO.getAge()
        );
    }

    public Long getId() {
        return this.id;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public String getFullName() {
        return this.firstName.concat(this.lastName);
    }

    public Byte getAge() {
        return this.age;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setAge(Byte age) {
        this.age = age;
    }
}
