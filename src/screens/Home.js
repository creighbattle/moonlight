import React from 'react';
import NavBar from '../components/NavBar'
import HomePageBody from '../components/HomePageBody'
import HomePageFooter from '../components/HomePageFooter'
import HomePageAbout from '../components/HomePageAbout';


function Home() {
    return (
        <div className="Home">

            <NavBar />


            <div style={{ backgroundColor: 'white', height: '100vh' }} id='section1'>
                <HomePageBody />
            </div>

            <div style={{ height: '100vh' }} id='section2'>
                <HomePageAbout />
            </div>




            {/* <div id="footer">
                <HomePageFooter />
            </div> */}


        </div>
    );
}

export default Home;