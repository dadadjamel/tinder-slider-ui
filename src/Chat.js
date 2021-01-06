import React, { Component } from 'react';
import './chat.css'
import { Avatar } from '@material-ui/core';
import { Link } from "react-router-dom";


const Chat = ({ name, message, timestamp, profilpic }) => {
    return (
        <Link to={`/chat/${name}`} >
            <div className="chat">
                <Avatar className="chat__avatar" alt={name} src={profilpic} />
                <div className="chat__info" >
                    <div className="chat__name" >
                        <h3>{name}</h3>
                        <p>{message}</p>
                    </div>
                    <div className="chat__time">
                        <p>{timestamp}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Chat;