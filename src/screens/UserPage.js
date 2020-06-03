import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ScrollIntoView from 'react-scroll-into-view';
import Image from 'react-bootstrap/Image';
import lake from '../assets/palmtrees.jpg';
import egg from '../assets/twitteregg.jpg';
import profilePic from '../assets/creighbattle.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

import FlatList from 'flatlist-react';


// var onresize = function(e) {
//     //note i need to pass the event as an argument to the function
//     var width = window.innerWidth;
//     var height = e.target.outerHeight;
//     console.log(width);
//  }
//  window.addEventListener("resize", onresize);

var events = [{id: 209280952, imageLink: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.seroundtable.com%2Fgoogle-image-search-behavior-29257.html&psig=AOvVaw0Y1uwvWyCTcct99WeXH4W1&ust=1591304297069000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDY9c3E5ukCFQAAAAAdAAAAABAD'}]






export default class UserPage extends React.Component {

    state = {
        nameDivTop: '', //18
        profileImageTop: '', //23
        profileImageSize: '',
        bioWidth: '',
        reviewSection: 0,
        reviewSectionLeft: 0,
        headerLeft: '',
        bioTop: 0,
        screenWidth: 0,
        aboutSectionWidth: ''
    }

    componentDidMount() {

        this.setInitalStates();


        this.getSize();

    }

    setInitalStates() {
        var w = window.innerWidth;
        this.setState({ screenWidth: w })
        if (w < 600) {
            this.setState({ nameDivTop: '16vh' })
            this.setState({ profileImageSize: '25%' })
            this.setState({ profileImageTop: '14vh' })
            this.setState({ bioWidth: '' })
            this.setState({ reviewSection: 0 })
            this.setState({ reviewSectionLeft: '' })
            this.setState({ headerLeft: '40vw' })
            this.setState({ bioTop: -50 })
            this.setState({ aboutSectionWidth: '50vw' })
        } else if (w > 600) {
            this.setState({ nameDivTop: '30vh' })
            this.setState({ profileImageSize: '15%' })
            this.setState({ profileImageTop: '23vh' })
            this.setState({ bioWidth: '25vw' })
            this.setState({ reviewSection: -287 })
            this.setState({ reviewSectionLeft: '25vw' })
            this.setState({ headerLeft: '17vw' })
            this.setState({ bioTop: -50 })
            this.setState({ aboutSectionWidth: '30vw' })
        }

    }


    getSize = () => {

        var changeState = () => {
            this.setState({ nameDivTop: '16vh' })
            this.setState({ profileImageSize: '25%' })
            this.setState({ profileImageTop: '14vh' })
            this.setState({ bioWidth: '' })
            this.setState({ reviewSectionLeft: '' })
            this.setState({ reviewSection: 0 })
            this.setState({ headerLeft: '40vw' })
            this.setState({ bioTop: -50 })
            this.setState({ aboutSectionWidth: '50vw' })
        }

        var changeState2 = () => {
            this.setState({ nameDivTop: '30vh' })
            this.setState({ profileImageSize: '15%' })
            this.setState({ profileImageTop: '23vh' })
            this.setState({ bioWidth: '25vw' })
            this.setState({ reviewSectionLeft: '25vw' })
            this.setState({ reviewSection: -287 })
            this.setState({ headerLeft: '17vw' })
            this.setState({ bioTop: -50 })
            this.setState({ aboutSectionWidth: '30vw' })
        }

        var adjustScreenWidth = () => {
            var w = window.innerWidth;
            this.setState({ screenWidth: w })
        }


        var onresize = function (e) {
            //note i need to pass the event as an argument to the function
            var width = window.innerWidth;
            var height = e.target.outerHeight;
            adjustScreenWidth();



            //alert(width);
            if (width < 600) {
                changeState();
            } else if (width > 600) {
                changeState2();
            }

        }
        window.addEventListener("resize", onresize);
    }




    render() {
        return (
            // <div>
            //     <div>
            //         <Navbar collapseOnSelect expand="lg" bg="*" fixed="top">
            //             <div style={{ marginLeft: '10vw', marginTop: '0vh', marginRight: '5vw' }}>
            //                 <Nav className="mr-auto">
            //                     <Navbar.Brand href="/"><p style={{ color: 'black' }}>Moonlight</p></Navbar.Brand>
            //                 </Nav>

            //             </div>

            //             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            //             <Navbar.Collapse id="responsive-navbar-nav">
            //                 <Nav>


            //                     {/* <div style={{ position: 'absolute', left: "50%", }}>
            //                 <div style={{ position: 'relative', left: "-50%" }}>
            //                     <form className="form-inline">
            //                         <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{ width: '20vw' }} /> */}
            //                     {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
            //                     {/* </form>
            //                 </div>
            //             </div> */}


            //                 </Nav>
            //             </Navbar.Collapse>
            //         </Navbar>
            //     </div>

            //     <div>
            //         <Image src={lake} style={{ height: 'auto', width: '100vw' }} fluid></Image>
            //     </div>




            //     <div style={{ position: 'absolute', top: this.state.nameDivTop, backgroundColor: 'white', width: '100vw', height: '13vh' }}>
            //         <div style={{ position: 'absolute', left: '40vw', top: '2vh' }}>
            //             <p style={{ fontWeight: 'bolder', fontSize: 20 }}>Creigh Battle</p>
            //             <p style={{ fontSize: 15, marginTop: -15 }}>Freelance web developer!</p>
            //         </div>
            //     </div>

            //     <div style={{ position: 'absolute', top: this.state.profileImageTop, left: '8vw', }}>
            //         <img src={profilePic} style={{ borderRadius: '62%', height: 100, width: 100 }}></img>
            //     </div>



            //     <div style={{ position: 'absolute', top: '28%', width: '100%', backgroundColor: '#DCDCDC', height: '20%' }}>
            //         <p style={{ textAlign: 'center', marginTop: 7 }}><text style={{fontWeight: 'bold'}}>Phone:</text> 856-275-3702</p>
            //         <p style={{ textAlign: 'center', marginTop: -5 }}><text style={{fontWeight: 'bold'}}>Email:</text> creighbattle@gmail.com</p>
            //         <p style={{ textAlign: 'center', marginTop: -5 }}>Rating: 5/5</p>

            //         <Button variant="primary" style={{ position: 'absolute', left: '34%', width: '30vw', backgroundColor: 'lightblue', borderWidth: 0, bottom: '10%' }}>Chat</Button>

            //     </div>

            //     <div style={{ position: 'absolute', top: '48vh', width: '100%', backgroundColor: 'white', height: '20vh' }}>
            //         <p style={{ textAlign: 'center', marginTop: 7 }}>My work</p>

            //     </div>

            // </div>












            // <div style={{backgroundColor: '#282828'}}>
            //     <div>
            //         <Navbar collapseOnSelect expand="lg" bg="*" fixed="top">
            //             <div style={{ marginLeft: '10vw', marginTop: '0vh', marginRight: '5vw' }}>
            //                 <Nav className="mr-auto">
            //                     <Navbar.Brand href="/"><p style={{ color: 'white' }}>Moonlight</p></Navbar.Brand>
            //                 </Nav>

            //             </div>

            //             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            //             <Navbar.Collapse id="responsive-navbar-nav">
            //                 <Nav>



            //                 </Nav>
            //             </Navbar.Collapse>
            //         </Navbar>
            //     </div>

            //     <div style={{ height: 150, width: '100vw', backgroundColor: '#282828' }}>
            //         {/* <Image src={lake} style={{ height: '20vh', width: '100vw' }} fluid></Image> */}
            //     </div>




            //     <div style={{ position: 'relative', top: 0, backgroundColor: 'white', width: '100vw', height: 120 }}>
            //         <div style={{ position: 'relative', left: this.state.headerLeft, top: 10 }}>
            //             <p style={{ fontWeight: 'bolder', fontSize: 20 }}>Creigh Battle</p>
            //             <p style={{ fontSize: 15, marginTop: -15 }}>Penns Grove, NJ</p>
            //         </div>
            //     </div>

            //     <div style={{ position: 'relative', top: -150, left: '10%', }}>
            //         <img src={profilePic} style={{ borderRadius: '62%', height: 100, width: 100 }}></img>
            //     </div>


            //     <div style={{ position: 'relative', top: this.state.bioTop, backgroundColor: '#282828', width: this.state.bioWidth, borderRadius: 0 }}>

            //         <p style={{ textAlign: 'center', color: 'white' }}>Bio</p>

            //         <p style={{ textAlign: 'center', color: 'white' }}><text style={{ fontWeight: 'bold' }}>Phone:</text> 856-275-3702</p>
            //         <p style={{ textAlign: 'center', marginTop: -5, color: 'white' }}><text style={{ fontWeight: 'bold' }}>Email:</text> creighbattle@gmail.com</p>
            //         <p style={{ textAlign: 'center', marginTop: -5, color: 'white' }}>Rating: 5/5</p>

            //     </div>


            //     <div style={{ position: 'relative', top: this.state.reviewSection, left: this.state.reviewSectionLeft, backgroundColor: 'white', height: 800 }}>
            // <Tabs>
            //     <TabList>                  

            //         <Tab style={{marginLeft: '5vw'}}>Work</Tab>
            //         <Tab style={{marginLeft: '5vw'}}>Reviews</Tab>

            //     </TabList>

            //     <TabPanel>
            //         <h2>Any content 1</h2>
            //     </TabPanel>
            //     <TabPanel>
            //         <h2>Any content 2</h2>
            //     </TabPanel>
            // </Tabs>
            //     </div>



            // </div>






            <div style={{ backgroundColor: '#696969', overflow: 'hidden' }}>

                <div style={{}}>
                    <img src={lake} style={{ height: 200, width: 800, display: 'block', marginLeft: 'auto', marginRight: 'auto' }}></img>
                </div>

                <div style={{ position: 'absolute', left: "50%", }}>
                    <img src={profilePic} style={{ borderRadius: '62%', height: 150, width: 150, display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: -75, border: '2px solid black', position: 'relative', left: "-50%" }}></img>
                </div>

                <div style={{ width: '100vw' }}>
                    <h2 style={{ marginTop: 80, textAlign: 'center' }}>
                        Creigh Battle
                    </h2>
                </div>


                <div style={{ width: '100vw', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
                    <div style={{ textAlign: 'center' }}>


                        <Tabs>

                            <div style={{ width: '50vw', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
                                <TabList>


                                    <Tab style={{}}>About</Tab>


                                    <Tab style={{}}>Work</Tab>


                                    <Tab style={{}}>Contact</Tab>

                                </TabList>
                            </div>



                            <div style={{ backgroundColor: 'black', height: '62vh' }}>
                                <div>

                                    <TabPanel>
                                        <div style={{ width: '50vw', display: 'block', marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'black', overflow: 'hidden' }}>
                                            <div style={{ paddingTop: 50, }}>
                                                <div style={{ backgroundColor: '#696969', width: this.state.aboutSectionWidth, display: 'block', marginLeft: 'auto', marginRight: 'auto', borderRadius: 20 }}>
                                                    <p style={{ fontSize: 20, padding: 20, textAlign: 'left' }}>Hello, my name is Creigh Battle. I am a freelance web developer residing
                                                    in Carney's Point, NJ. Check out some of my work on the next tab over!
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </TabPanel>


                                    <TabPanel>


                                    </TabPanel>


                                    <TabPanel>
                                        <div style={{ width: '50vw', display: 'block', marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'black', overflow: 'hidden' }}>
                                            <div style={{ paddingTop: 50, }}>
                                                <div style={{ backgroundColor: '#696969', width: this.state.aboutSectionWidth, display: 'block', marginLeft: 'auto', marginRight: 'auto', borderRadius: 20 }}>
                                                    <p style={{ fontSize: 20, padding: 20, textAlign: 'left' }}>Hello, my name is Creigh Battle. I am a freelance web developer residing
                                                    in Carney's Point, NJ. Check out some of my work on the next tab over!
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </TabPanel>

                                </div>
                            </div>





                        </Tabs>

                    </div>
                </div>


            </div>

        );
    }
}