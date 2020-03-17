import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ServerResponse } from 'http';

class Login extends Component {
    state = {
        isFocus: false
    };
    constructor(props){
        super(props)
        this.inputRef = React.createRef();
    }

    handleFocus = () => {
        this.setState({ isFocus: true});
    }

    handleBlur= () => {
        this.setState({ isFocus: false});
    }
    
    render() { 
        return (
            <div className="container centerMenu">
                <div className="login card col-xs-12 col-sm-4">
                    <div className="text-center">
                        <h4>FMPS</h4>
                    </div>

                    <div className="login-group">
                        <input type="text" class="login-control" id="username"/>
                        <label for="username">Username</label>
                    </div>

                    <div className="login-group">
                        <input type="password" class="login-control" id="pwd"/>
                        <label for="pwd">Password</label>
                    </div>

                    <div className="login-group">
                        <select onFocus={this.handleFocus} onBlur={this.handleBlur} class="login-control" id="mgntServer">
                         {this.props.servers.map((item, index) => <option key={index}> {item}</option>)}
                        </select>
                        <label for="mgntServer">Select Server</label><FontAwesomeIcon className={this.getfocusClasses()} icon="angle-down" />
                    </div>

                    <div className="login-group">
                        <label class="login-check-label">
                            <input type="checkbox" /> Remeber Me
                        </label>
                    </div>
                    <div className="login-group">
                        <a href="#">Forgot Password?</a>
                    </div>
                    <div className="login-group ">
                        <button type="button" class="float-right btn-sm btn-dark">LOGIN</button>
                    </div>
                    
                </div>
            </div>

        );
    }

    getfocusClasses() {
        let classes = "icon ";
        classes += this.state.isFocus == true ? "focusClass" : "";
        return classes;
      }
      
}
 
export default Login;