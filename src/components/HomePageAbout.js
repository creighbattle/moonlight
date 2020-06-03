import React from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import back from '../assets/outdoors.jpg'
import Image from 'react-bootstrap/Image'


export default class HomePageAbout extends React.Component {

    render() {
        return (

            <div style={{ height: '100vh' }}>

                <div style={{ backgroundColor: 'pink', height: '100vh' }}>
                    <p style={{ textAlign: 'center', paddingTop: '20%'}}>About Page</p>
                </div>


                {/* <div style={{ position: 'absolute', left: "50%", top: "30%" }}>
                    <div style={{ position: 'relative', left: "-50%", top: "-30%" }}>
                        <h1 style={{ color: 'white' }}>An easier way to find work!</h1>
                    </div>
                </div> */}

            </div>
        )
    }
}


