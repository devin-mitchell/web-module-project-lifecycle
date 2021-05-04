import axios from 'axios';
import React, { Component } from 'react';
import User from './User';
import './App.css';

class App extends Component {
  state ={
    userData: {},
    followers: [],
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/devin-mitchell')
      .then(res => {
        this.setState({
          userData: res.data
        })
        axios.get('https://api.github.com/users/devin-mitchell/followers')
          .then(res => {
            this.setState({
              followers: res.data
            })
          })
          .catch(err => {
            console.log(err);
          })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <User 
          userData={this.state.userData}
          followers={this.state.followers}
        />
      </div>
    );
  }
}

export default App;
