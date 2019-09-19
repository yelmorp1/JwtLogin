package com.morpad.model;

import java.io.Serializable;

public class Participante implements Serializable {

    private static final long serialVersionUID = 5926468583005150707L;
    private String username;
    private String password;

    public String getUsername() {
        return username;
    }

    public Participante setUsername(String username) {
        this.username = username;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public Participante setPassword(String password) {
        this.password = password;
        return this;
    }
}
