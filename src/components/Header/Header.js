import React, { Component } from 'react';
import axios from  'axios';
import { Link } from "react-router-dom";
import './Header.css';
import headerLogo from '../../assets/header_logo.png';

export default class Header extends Component {

  logout = ()=>{
    axios.post('http://localhost:3001/api/auth/logout')
  }
  render(){
    return(
      <div className="Header">
        <div className ="header-content">

          <div className="header-left">
            <img src={headerLogo} className="logo" alt="Houser Logo"/> <span className="bold">Houser</span> <span>Dashboard</span>
          </div>

          <div className="header-right">
            <Link to= {'/'} className="no-decoration">
              <p onClick={this.logout}>Logout</p>
            </Link>
          </div>

        </div>
      </div>
    )
  }

}
