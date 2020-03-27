import React, { Component } from "react"
import Header from "../header/Header";

import Background from "../../images/nnm.jpg"
import Doki from "../../images/dokii.png"
import SignInItems   from "./signInItems"
import "../../sass/main.scss";


export default class SignIn extends Component {
    render(){
        return(
         
                    <section>
                         <Header />
                   
                 <div className=" container-fluid contact_2 " style={{backgroundImage: "url(" + Background + ")"}} >
               
                <div className=" container-fluid contact_body">
                
                < SignInItems />
                </div>

                <div className="dokis">
              
                <img src={Doki} class="img-fluid" alt="Responsive image"/>
                </div>
               
            </div>
            </section>
            
    
            
           
        )
    }
}
    