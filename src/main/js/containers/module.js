import React, {Component} from 'react';
import Input from '../components/input';
import client from "../api/client";
import follow from "../api/follow";
const root = '/api';
const user = {
    name: "Zhouli",
    password: "123456"
};

class Module extends Component {

    constructor(props) {
        super(props);
        this.joinChat = this.joinChat.bind(this);
        this.createChat = this.createChat.bind(this);
        this.updateDataBase = this.updateDataBase.bind(this);
        this.state = {chatRooms: []};
    }


    componentDidMount() {
        client({method: 'GET', path: '/api/chatRooms'}).done(response => {
            this.setState({chatRooms: response.entity._embedded.chatRooms});
        });
    }

    joinChat(e) {
        e.preventDefault();
        const chatName = document.forms["joinChat"]["oldChatRoom"].value;
        this.state.chatRooms.map(chatRoom => {
            if (chatRoom.chatRoomName === chatName) {
                const newChatRoom = {
                    chatRoomName: chatName,
                    users: [user],
                    messageHistory: []
                };
                client({
                    method: 'PUT',
                    path: chatRoom._links.self.href,
                    entity: newChatRoom,
                    headers: {'Content-Type': 'application/json'}
                }).done(response => {
                    console.log(response);
                });
                window.location = "/chatRoom/" + chatName;
            } else {
                alert("No such room man!");
            }
        });
    };

    createChat(e) {
        e.preventDefault();

        const chatName = document.forms["createChat"]["newChatRoom"].value;
        const newChatRoom = {
            chatRoomName: chatName,
            users: [user],
            messageHistory: []
        };
        this.updateDataBase(newChatRoom);
        window.location = "/chatRoom/" + chatName;
    };

    updateDataBase(data) {
        follow(client, root, ['chatRooms']).then(chatRoomCollection => {
            return client({
                method: 'POST',
                path: chatRoomCollection.entity._links.self.href,
                entity: data,
                headers: {'Content-Type': 'application/json'}
            })
        }).done(response => {
            console.log(response);
        });
    }

    render() {
        return <div className='module'>
            <form name='joinChat' onSubmit={this.joinChat}>
                <Input type='text' name='oldChatRoom' placeholder='chat room name' />
                <button className='join-old-room'>Join a Chat</button>
            </form>
            <form name='createChat' onSubmit={this.createChat}>
                <Input type='text' name='newChatRoom' placeholder='chat room name' />
                <button className='create-new-room'>Create a Chat</button>
            </form>
            <p className="text-info">
                <small>Default chatRoom is <strong>veoRide</strong></small>
            </p>
        </div>
    }
}

export default Module