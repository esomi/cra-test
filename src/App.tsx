import React from 'react';
import logo from './logo.svg';
import './App.css';
import {STRING1, STRING2} from "./env";

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    <div>REACT_APP_STRING1</div>
                        {process.env.REACT_APP_STRING1}
                    <br/><br/>

                    <div>REACT_APP_STRING2</div>
                    {process.env.REACT_APP_STRING2}
                    <br/><br/>

                    <div>STRING1</div>
                        {STRING1}
                    <br/><br/>

                    <div>STRING2</div>
                        {STRING2}
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );

}

export default App;
