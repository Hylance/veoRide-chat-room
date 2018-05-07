package com.veoride.chatroom.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;

@Data
@Entity
public class ChatMessage implements Serializable {

    private static final long serialVersionUID = -4062840818873160270L;
    @Id
    @GeneratedValue
    private Long id;
    private String message;
    private long timestamp;

    private ChatMessage() {}

    public ChatMessage(String message) {
        this.message = message;
        this.timestamp = System.currentTimeMillis();
    }

}
