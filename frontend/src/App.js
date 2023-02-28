import React, { Component } from "react";
import Home from './components/Home';
import getWeb3 from "./web3";

import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    
  };

  runExample = async () => {
    const { accounts, contract } = this.state;
  };

  render() {
    if (!this.state.web3) {
      return <div><Home /></div>;
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Hardhat Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          Test
        </p>
        

        
      </div>
    );
  }
}

export default App;