package com.veoride.chatroom.repository;

import com.veoride.chatroom.model.ChatMessage;
import org.springframework.data.repository.CrudRepository;

public interface ChatMessageRepository extends CrudRepository<ChatMessage, Long> {
}
