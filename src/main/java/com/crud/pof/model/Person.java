package com.crud.pof.model;

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

    public Person(String firstName, String lastName, Byte age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
