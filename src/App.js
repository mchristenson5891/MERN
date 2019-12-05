import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar'
import Movies from './components/Movies'
import ShowMovie from './components/ShowMovie'
import SignInWithGoogle from './components/SignInWithGoogle'

import * as ROUTES from './constants/routes'
import { firebase } from './firebase/firebase'

import './App.css';

class App extends Component {
  state = {
    message: '',
    currentUser: null
  }

  async componentDidMount() {
    console.log(ROUTES.HOME)
    console.log(firebase)
    const message = await fetch('/api/v1/hello')
    const messageJson = await message.json()
    this.setState({message: messageJson.message})
  }

  doSetCurrentUser = currentUser => {
    this.setState({
      currentUser
    })
  }

  render() {
    const { currentUser } = this.state

    return (
      <div className="App">
        <NavBar />
        {
          currentUser
            ? currentUser.displayName
            : null
        }
        <h1>Hello {this.state.message}!</h1>
        <h1>Hey Dude!</h1>
        <SignInWithGoogle doSetCurrentUser={this.doSetCurrentUser}/>
        <Switch>
          <Route exact path={ROUTES.HOME} render={() => <div>home</div>} />
          <Route exact path={ROUTES.LOGIN} render={() => <div>login</div>} />
          <Route exact path={ROUTES.SIGN_UP} render={() => <div>signup</div>} />
          <Route exact path={ROUTES.MOVIES} component={ Movies } />
          <Route exact path={`${ROUTES.MOVIES}/:id`} component={ ShowMovie } />
        </Switch>
      </div>
    );
  }
}

export default App;
