import React, {Component} from 'react';
import Input from '../components/input';
import client from "../api/client";
const currentRoomName = window.location.href.split('/')[4];
let allMessages = '';

class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
        this.getCurrentRoom = this.getCurrentRoom.bind(this);
        this.getAllMessages = this.getAllMessages.bind(this);
        this.state = {chatRoom: {}};
    }

    componentDidMount() {
        this.getCurrentRoom();
        if (currentRoomName === "veoRide") {
            document.getElementById('broadcast').value = "Zhouli joined chat room veoRide, welcome!"
        } else {
            document.getElementById('broadcast').value = "Zhouli created chat room " + currentRoomName
        }
    }

    getCurrentRoom() {
        client({method: 'GET', path: '/api/chatRooms'}).done(response => {
            response.entity._embedded.chatRooms.map(chatRoom => {
                if (currentRoomName === chatRoom.chatRoomName) {
                    this.setState({chatRoom: chatRoom});
                }
            })
        });
    }

    getAllMessages(msg) {
        allMessages = allMessages + "Zhouli: " + msg + '\n';
        return allMessages;
    }

    sendMessage(e) {
        e.preventDefault();
        this.getCurrentRoom();
        const newMessage = document.forms["sendChat"]["chatBox"].value;
        this.state.chatRoom.messageHistory.push(newMessage);
        const newChatRoom = {
            chatRoomName: currentRoomName,
            users: this.state.chatRoom.users,
            messageHistory: this.state.chatRoom.messageHistory
        };
        client({
            method: 'PUT',
            path: this.state.chatRoom._links.self.href,
            entity: newChatRoom,
            headers: {'Content-Type': 'application/json'}
        }).done(response => {
            console.log(response);
        });
        document.forms["sendChat"]["chatBox"].value = '';
        document.getElementById('chat-input').value = this.getAllMessages(newMessage);
    }

    render() {
        return <div className='chat-box'>
            <form name='sendChat' onSubmit={this.sendMessage}>
                <Input type='text' name='chatBox' placeholder='send a message' />
                <button className='chat-box-button'>Send</button>
            </form>
        </div>
    }
}

class ChatBody extends Component {
    render() {
        return (
            <div className='chat-body'>
                <input id='broadcast' name='broadCast' />
                <textarea id='chat-input' name='chatBody'/>
                <ChatBox/>

            </div>
        )
    }
}

class Room extends Component {

    render() {
        return <ChatBody/>
    }
}

export default Room
