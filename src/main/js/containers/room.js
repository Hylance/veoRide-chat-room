import React, {Component} from 'react';
import Input from '../components/input';

class ChatBox extends Component {
    constructor(props) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
    }

    sendMessage(e) {
        e.preventDefault();
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
                <input className='chat-input' type='text' name='chatBody' placeholder='' />
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
