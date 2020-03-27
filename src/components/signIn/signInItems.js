import React, { Component } from "react"
import {withFormik} from "formik"
import Doki from "../../images/doki.jpg"
import "../../sass/main.scss";
export default class SignInItems extends Component {
    render(){
        return(
            <div>
            <form>
  <div class="form-group">
   
    <input type="text" className="form-control inp" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="UserName" />
    
  </div>
  <div class="form-group">
    
    <input type="password" className="form-control inp" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Remember me </label><span>Forget Password</span>
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
            
</form>
            
            </div>
        )
        
    }
}
