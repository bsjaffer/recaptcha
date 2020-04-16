import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVerified: false
    }
  }

  recaptchaLoaded =()  =>{
    console.log('capcha successfully loaded');
  }

  handleLogin =() => {
    if (this.state.isVerified) {
      alert('Logged In!!!');
    } else {
      alert('Please verify!');
    }
  }

  verifyCallback = (response)  =>{
    if (response) {
      this.setState({
        isVerified: true
      })
    }
  }

  render() {
    return (
      <div className="App">
    
    <div class="container">
        <div className="App-intro">
          <div>
          <input type="text" placeholder="username" />
          </div> <div>
          <input type="password" placeholder="password" />  </div>
          <div
            className="convert"
            onClick={this.handleLogin}
          >Login</div>

          <Recaptcha
            sitekey=""
            render="explicit"
            onloadCallback={this.recaptchaLoaded}
            verifyCallback={this.verifyCallback}
          />
        </div>
        </div>
      </div>
    );
  }
}

export default App;