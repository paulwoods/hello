import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

    const [greeting, setGreeting] = useState({message: "none"});

    useEffect(() => {

        fetch("http://localhost:8080")
            .then(response => response.json())
            .then(json => setGreeting(json));

    }, []);

    return <div className="App">

        <header className="App-header">

            <img src={logo} className="App-logo" alt="logo"/>

            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>

            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Greeting: {greeting.message}
            </a>

        </header>

    </div>;

};

export default App;
