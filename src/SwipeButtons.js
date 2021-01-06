import React, { Component } from 'react';
import './SwipeButtons.css'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { IconButton } from '@material-ui/core';


const SwipeButtons = () => {
    return ( 
        <div className="swipebuttons" >
            <IconButton className="swipebuttons__a" ><ReplayIcon fontSize="large" /></IconButton>
            <IconButton className="swipebuttons__b" ><CloseIcon fontSize="large"/></IconButton>
            <IconButton className="swipebuttons__c" ><StarRateIcon fontSize="large"/></IconButton>
            <IconButton className="swipebuttons__d" ><FavoriteIcon fontSize="large"/></IconButton>
            <IconButton className="swipebuttons__e" ><FlashOnIcon fontSize="large"/></IconButton>
        </div>
     );
}
 
export default SwipeButtons;