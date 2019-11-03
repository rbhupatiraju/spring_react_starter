package com.base.rest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(value = {"com.base.rest"})
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class);
    }
}
