package com.morpad.controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InicioController {
    @RequestMapping({ "/hello" })
    public String firstPage() {
        return "Hello World";
    }
}
