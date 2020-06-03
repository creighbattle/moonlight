import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import back from '../assets/outdoors.jpg'
import Image from 'react-bootstrap/Image'
import {
    BrowserRouter as Router,
    Link,
    Route
  } from 'react-router-dom';



function HomePageBody() {
    return (

        <div style={{ height: '100vh' }}>

            <Image src={back} style={{ height: '100%', width: '100%', }} fluid></Image>

            <div style={{ position: 'absolute', background: "linear-gradient(180deg, #00C9FF 0%, #92FE9D 100%)", top: 0, left: 0, bottom: 0, right: 0, opacity: .5 }}>

            </div>

            <div style={{ position: 'absolute', left: "50%", top: "30%" }}>
                <div style={{position: 'relative', left: "-50%", top: "-30%"}}>
                    <h1 style={{ color: 'white' }}>An easier way to find work!</h1>
                    <button><Link to='/signup'>Register Now!</Link></button>
                </div>

            </div>
        </div>
    )
}

export default HomePageBody;