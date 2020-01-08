import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import constants from './constants'

// Rendering and calling the API from React to the Express Server

class App extends Component {

 // Creating a state with a message
  state = { message: "ERROR NO MESSAGE" }

  render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                This is Asian Food Legit!  
                <span role="img" aria-label="chinese-takeout">🥡</span>
                <span role="img" aria-label="chinese-takeout">🥡</span>
                <span role="img" aria-label="chinese-takeout">🥡</span>
              </p>
              <p>
                The message is: {this.state.message}
              </p>
                <p>
                The route is: {`${constants.hostname}/status`}
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

//This function will be called when the render is instantiated but before system is ready for user
//Configuring CORS

  componentDidMount() {
        fetch(`${constants.hostname}/status`, {
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => {
          console.log("before the parse")
          const jsonParsed = res.json()
          console.log("after the parse")
          return jsonParsed
        })
        .then((data) => {
          console.log(data)
          this.setState({ message: data.message })
        })
        .catch(console.error)
  }
}

export default App;