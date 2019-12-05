import React, { Component } from 'react'
import { doSignInWithGoogle } from '../../firebase/firebase'


class SignInGoogleBase extends Component {
    state = { error: null };
    
    onSubmit = event => {
        doSignInWithGoogle()
        .then(async socialAuthUser => {
            const user = {
                displayName: socialAuthUser.user.displayName,
                email: socialAuthUser.user.email
            }
            const createUser = await fetch('/auth/users', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const createUserJson = await createUser.json()
            this.props.doSetCurrentUser(createUserJson)
        })
        .catch(error => {
          this.setState({ error });
        });
      event.preventDefault();
    };
    render() {
      const { error } = this.state;
      return (
        <form onSubmit={this.onSubmit}>
          <button type="submit">Sign In with Google</button>
          {error && <p>{error.message}</p>}
        </form>
      );
    }
  }

  export default SignInGoogleBase