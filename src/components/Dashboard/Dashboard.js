import React, { Component } from 'react';
import axios from  'axios';
import { Link } from "react-router-dom";
import Header from '../Header/Header';
import './Dashboard.css';

// import logo from '../../assests/logo.png';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentDidMount(){
    console
  }

  render(){
    return(
      <div>
        <Header />
        <div className="Dashboard">
          Dashboard
        </div>
      </div>
    )
  }

}
