import React ,  {Component} from "react";
import {Link} from "react-router-dom";
import "../../sass/main.scss";

export default class FooterItems extends Component{
    render(){
        return(
            <div className="col-md-3">
                <h4 className="footerItemTitle">{this.props.title}</h4>
                <ul>
                    <li className="yo">
                        <Link className="yoo" to={this.props.link_1}>{this.props.first}</Link>
                    </li>
                     <li>
                        <Link className="yoo"  to ={this.props.link_2}>{this.props.second}</Link>
                     </li>
                     <li>
                        <Link className="yoo"  to ={this.props.link_3}>{this.props.third}</Link>
                     </li>
                    <li>
                    <Link className="yoo" to ={this.props.link_4}>{this.props.fourth}</Link>
                    </li>
                    <li>
                    <Link className="yoo" to ={this.props.link_5}>{this.props.fifth}</Link>
                    </li>
                    
                     
                </ul>
                
            </div>
        )
    }
}