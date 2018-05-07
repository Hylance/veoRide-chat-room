package com.veoride.chatroom.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Data
@Entity
public class User implements Serializable {

    private static final long serialVersionUID = -8616470432126594482L;

    @Id
    @GeneratedValue
    private Long userId;
    private String name;
    private String password;

    private User() {}

    public User(String name, String password) {
        this.name = name;
        this.password = password;
    }

    

}
