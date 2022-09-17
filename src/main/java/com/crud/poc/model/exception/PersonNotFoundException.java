package com.crud.poc.model.exception;

import java.text.MessageFormat;

public class PersonNotFoundException extends RuntimeException {
    public PersonNotFoundException(final Long id) {
        super(MessageFormat.format("Person with [ID: {0}] not found", id));
    }
}
