import React, {Component} from "react"
import "../../sass/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import FooterItems from "./footerItems"
// get our fontawesome imports
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const footers = [
    {
        title:"About" ,
        link_1 : "/",
        first: "About",
        link_2 : "/",
        second: "Services",
        link_3 : "/",
        third: "How it Works",
        link_4 : "/",
        fourth: "News & Stories"
    },
    {
        title:"Patient & Visitors" ,
        link_1 : "/",
        first: "locate a nearby Hospital",
        link_2 : "/",
        second: "Locate a nearby Pharmacy",
        link_3 : "/",
        third: "Get a Doctor"
    },
    {
        title:"Connect With Us" ,
        link_1 : "/",
        first: "Facebook",
        link_2 : "/",
        second: "Instagram",
        link_3 : "/",
        third: "Youtube",
        link_4 : "/",
        fourth: "Linkedn",
        link_5 : "/",
        fifth: "Twitter"
    }
];
export default class Footer extends Component{
    render(){
        return(
            <div>

            
            <footer className="container-fluid footer">
               <div className="row">
                    {footers.map( (footer, index) => {
                            return <FooterItems {...footer} key={index} />
                    })}
                    <div className="col-3">
                        <h1 className="Join-Our-Mailing-List">Join Our Mailing List</h1>
                        <input className="Rectangle-1370" type="text" placeholder="enter mail"/>
                        <span className="Ellipse_32"><FontAwesomeIcon icon={faArrowRight} size="lg" /></span>
                    </div>
                    
               </div>
               
            </footer>

            <div className="container-fluid footer_2">
                    <p className="copyright">copyright @2020 by Fb Internship. All Right Reserved</p>
                   
            </div>
            </div>
        )
    }
}