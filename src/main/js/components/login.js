import React, { Component } from 'react';
import Input from './input'

class Login extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        const username = document.forms["myForm"]["username"].value;
        const password = document.forms["myForm"]["password"].value;
        this.props.users.map(user => {
            if (user.name === username && user.password === password) {
                window.location = "/chat";
            } else {
                alert("wrong username or password! ");
            }
        });
        e.preventDefault();
    }
    render() {
        return <Modal onSubmit={ this.handleSubmit } key='modal'/>
    }

}

class Modal extends Component {

    static onClick(e) {
        alert("Only limited users for now!")
    }
    render() {
        return <div className='modal'>
            <form name='myForm' onSubmit= { this.props.onSubmit }>
                <Input type='text' name='username' placeholder='username' />
                <Input type='password' name='password' placeholder='password' />
                <button className='sign-in'> Sign In</button>
            </form>
            <a className='register' onClick={Modal.onClick} href='#'>Not a member yet? Register now!</a>
            <p className="text-info">
                <small>Default credential is <strong>Zhouli/123456</strong></small>
            </p>
        </div>
    }
}



export default Login;