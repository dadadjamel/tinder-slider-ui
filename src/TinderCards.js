import React, { Component, useState, useEffect } from 'react';
import TinderCard from "react-tinder-card"
import './tindercards.css'
// import databse from './firebase'

const TinderCards = () => {
    const [ppl, setppl] = useState([{name:"Carla",url:"https://www.nextplz.fr/wp-content/uploads/2020/04/90068474-122635915994994-7971647434267840263-n.jpg"},
{name:"Tom hills",url:"https://i.pinimg.com/originals/7b/e4/0d/7be40df31da97c4aaf447e713012ed90.jpg"}])

    // useEffect(()=>{
    //     databse.collection('ppl').onSnapshot(snapshot=>(
    //         setppl(snapshot.docs.map(doc=>doc.data()))
    //     ))

    // },[])
    return (
        <div>
            <div className="tindercards__cardcontainer" >
                {ppl.map(person => (
                    <TinderCard className="swipe" key={person.name} preventSwipe={['up', 'down']} >
                        <div style={{ backgroundImage: `url(${person.url})` }} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>

        </div>
    );
}

export default TinderCards;