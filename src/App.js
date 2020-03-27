import React, { Component} from 'react';
import Layouts from './layouts/Layouts';
import signIn from "./components/signIn/signIn"
import "./sass/main.scss"
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends Component {
  render(){
    return (
      
        <Router>
          <div>
            <Route 
              exact  path= "/"
                component = { Layouts }

                 />
                 <Route path="/signIn" component={signIn} />
                 
                 </div> 
        </Router>
        
      
    );
  }
 
}

export default App;
