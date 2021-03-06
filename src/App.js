import React, { Component } from 'react'
import './App.css'
import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  constructor() {
    super()
    const user = JSON.parse(localStorage.getItem('user'))
    this.state = {
      user: user || {}, //if user exists, go user

    }
  }

  signOut = () => {
    this.setState({ user: {} })
    localStorage.removeItem('user')
  }

  signedIn = () => {
    return this.state.user.uid
  }

  handleAuth = (user) => {
    this.setState({ user })
    localStorage.setItem('user', JSON.stringify(user))
  }

  render() {
    return (
      <div className="App">
        {
          this.signedIn()
            ? <Main
              user={this.state.user}
              signOut={this.signOut}
            />
            : <SignIn handleAuth={this.handleAuth} />
        }
      </div>
    )
  }
}


export default App