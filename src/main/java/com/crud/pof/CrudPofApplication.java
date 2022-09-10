package com.crud.pof;

import com.crud.pof.repository.PersonRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@EnableWebMvc
@SpringBootApplication
public class CrudPofApplication {
    public static void main(String[] args) {
        ConfigurableApplicationContext configurableApplicationContext =
                SpringApplication.run(CrudPofApplication.class, args);
        PersonRepository personRepository =
                configurableApplicationContext.getBean(PersonRepository.class);
    }
}
