import React, { Component } from 'react';
import axios from  'axios';
import './Login.css';

import logo from '../../assets/auth_logo.png';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  login = ()=>{
    let { username, password } = this.state;
    axios.post('http://localhost:3001/api/auth/login', {
      username,
      password
    })
    .then( response => {
      if (response.data.id){
        this.props.history.push(`/dashboard`);
      } else {
        this.props.history.push(`/`);
      }
    })
  }
  register = ()=>{
    let { username, password } = this.state;
    axios.post('http://localhost:3001/api/auth/register', {
      username,
      password
    })
    .then( response => {
      if (response.data[0].id){
        this.props.history.push(`/dashboard`);
      } else {
        this.props.history.push(`/`);
      }
    })
  }

  render(){
    return(
      <div className="Login">
        <img src={logo} className="logo" alt="Houser Logo"/>

        <div className="login-form">
          <label>Username</label>
          <input name="username" onChange = { (e)=> this.setState({username: e.target.value})} />
          <label>Password</label>
          <input name="password" onChange = { (e)=> this.setState({password: e.target.value})} />

          <div className="login-buttons">
          <button className="btn btn-lt-green" onClick={ this.login}>Login</button>
          <button className="btn btn-drk-green" onClick={this.register}>Register</button>
            {/*<Link to={"/dashboard"}>
              <button className="btn btn-lt-green" onClick={ this.login}>Login</button>
            </Link>
            <Link to={"/dashboard"}>
              <button className="btn btn-drk-green" onClick={this.register}>Register</button>
            </Link>*/}
          </div>

        </div>

      </div>
    )
  }


}
