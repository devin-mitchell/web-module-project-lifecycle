import axios from 'axios';
import React, { Component } from 'react';
import User from './User';
import './App.css';
import styled from 'styled-components'

const Container = styled.div`
  background: #711c91;
  min-height: 100vh;
`

class App extends Component {
  state ={
    userData: {},
    followers: [],
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/devin-mitchell')
      .then((userRes) => {
        axios.get('https://api.github.com/users/devin-mitchell/followers')
          .then(followerRes => {
            console.log(userRes)
            console.log(followerRes)
            this.setState({
              userData: userRes.data,
              followers: followerRes.data
              
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
      <Container className="App">
        <User 
          userData={this.state.userData}
          followers={this.state.followers}
        />
      </Container>
    );
  }
}

export default App;
