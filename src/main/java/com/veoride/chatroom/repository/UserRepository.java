package com.veoride.chatroom.repository;

import com.veoride.chatroom.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
