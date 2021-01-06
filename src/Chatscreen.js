import React, { Component, useState } from 'react';
import './chatscreen.css'
import { Avatar } from '@material-ui/core';

const Chatscreen = () => {
    const [input,setinput] = useState('')
    const [messages, setmessages] = useState([
        {
            name: "Sohaib",
            image: "https://i.pinimg.com/originals/2d/0f/50/2d0f50e8e4f6b233c7cf70b4bd36f89c.png",
            message: "Salut CV"

        },
        {
            name: "Sohaib",
            image: "https://i.pinimg.com/originals/2d/0f/50/2d0f50e8e4f6b233c7cf70b4bd36f89c.png",
            message: "Moi CV"
        },
        {
            message: "wazzuuupp 🖐🖐"
        }
    ]);

    const handlesubmit = (e) => {
        e.preventDefault()
        setmessages([...messages,{message:input}])
        setinput('')
    }
    return (
        <div className="chatscreen" >
            <p>YOU WERE MATCHED WITH SOHAIB ON 10/08/20</p>
            {messages.map(message => (
                <div className={`chatscreen__message ${!message.name && "chatscreen__messageright"}`} >
                    {message.name && <Avatar className="chatscreen__avatar" alt={message.name} src={message.image} />}
                    <p>{message.message}</p>
                </div>
            ))}

            <form onSubmit={handlesubmit} className="chatscreen__inputcontainer">
                <input value={input} onChange={(e)=> setinput(e.target.value)} className="chatscreen__inputfield" placeholder="Type a message..." type="text" />
                <button className="chatscreen__inputbutton" >Send</button>
            </form>
        </div>
    );
}

export default Chatscreen;