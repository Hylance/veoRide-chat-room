package com.veoride.chatroom.repository;

import com.veoride.chatroom.model.ChatRoom;
import org.springframework.data.repository.CrudRepository;

public interface ChatRoomRepository extends CrudRepository<ChatRoom, Long> {
}
