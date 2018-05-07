package com.veoride.chatroom.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.concurrent.CopyOnWriteArrayList;

@Data
@Entity
public class ChatRoom implements Serializable {
    private static final long serialVersionUID = -4592237724051097771L;
    @Id
    @GeneratedValue
    private Long id;
    private String chatRoomName;
    private ArrayList<User> users;
    private CopyOnWriteArrayList<ChatMessage> messageHistory;

    private ChatRoom() {}

    public ChatRoom(String chatRoomName, ArrayList<User> users, CopyOnWriteArrayList<ChatMessage> messageHistory) {
        this.chatRoomName = chatRoomName;
        this.users = users;
        this.messageHistory = messageHistory;
    }
}
