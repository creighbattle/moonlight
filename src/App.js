import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import firebase from 'firebase';

import Home from './screens/Home';
//import About from './screens/About';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import UserPage from './screens/UserPage';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCkOMSteLO1p1BYcqxiPKJT_2nGMeffbzs",
  authDomain: "testproject-e2f93.firebaseapp.com",
  databaseURL: "https://testproject-e2f93.firebaseio.com",
  projectId: "testproject-e2f93",
  storageBucket: "testproject-e2f93.appspot.com",
  messagingSenderId: "193495535383",
  appId: "1:193495535383:web:aa4af8626bbef3f0877152"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <Switch>
          <Route path="/" component={Home} exact />
          {/* <Route path="/About" component={About} /> */}
          <Route path="/SignIn" component={SignIn} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/User" component={UserPage} />
        </Switch>

      </BrowserRouter>
    );
  }
}

export default App;

