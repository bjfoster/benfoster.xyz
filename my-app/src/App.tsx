import React from 'react';
import logo from './logo.svg';
import './App.css';

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my homepage!
        </p>
        <div className='Link-box'>
          <a
            className="App-link"
            href="mailto:ben@benfoster.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineMail/>
          </a>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/benjaminfoster1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin/>
          </a>
          <a
            className="App-link"
            href="https://github.com/bjfoster"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub/>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
