import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Room from './containers/room'

ReactDom.render(
    <Room />,
    document.getElementById('chatRoom')
);