'use strict';

import React, {Component} from 'react';
import client from '../api/client';
import Login from '../components/login';



class App extends Component {

    constructor(props) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount() {
        client({method: 'GET', path: '/api/users'}).done(response => {
            this.setState({users: response.entity._embedded.users});
        });
    }

	render() {
		return (
            <div>
                <Login users={this.state.users}/>
            </div>
    	)
	}
}

export default App
