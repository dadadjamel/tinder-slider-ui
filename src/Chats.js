import React, { useState } from 'react';
import './chats.css'
import Chat from './Chat';

const Chats = () => {
    return (
        <div>
            <Chat name="Sohaib" message="wazzuuupp 🖐🖐" timestamp="40 minutes ago" profilpic="https://i.pinimg.com/originals/2d/0f/50/2d0f50e8e4f6b233c7cf70b4bd36f89c.png" />
            <Chat name="Saber" message="Helllooo booii 👩🏾‍🤝‍🧑🏾👩🏾‍🤝‍🧑🏾" timestamp="1 Hour ago" profilpic="https://i.pinimg.com/originals/41/dd/e5/41dde5a6beb3fc0d808eb8e56bead06c.png" />

        </div>
    );
}

export default Chats;