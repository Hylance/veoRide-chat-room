/*
 * Copyright 2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.veoride.chatroom;

import com.veoride.chatroom.model.ChatMessage;
import com.veoride.chatroom.model.ChatRoom;
import com.veoride.chatroom.model.User;
import com.veoride.chatroom.repository.ChatRoomRepository;
import com.veoride.chatroom.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.concurrent.CopyOnWriteArrayList;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final UserRepository userRepository;
	private final ChatRoomRepository chatroomRepository;

	@Autowired
	public DatabaseLoader(UserRepository userRepository, ChatRoomRepository chatroomRepository) {
		this.userRepository = userRepository;
		this.chatroomRepository = chatroomRepository;
	}

	@Override
	public void run(String... strings) throws Exception {
		this.userRepository.save(new User("Zhouli", "123456"));
		this.chatroomRepository.save(new ChatRoom("veoRide", new ArrayList<User>(), new CopyOnWriteArrayList<ChatMessage>()));
	}
}
