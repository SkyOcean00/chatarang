import React, { Component } from 'react'

class SignIn extends Component {
    state={
        email:'',
    }

    handleSubmit= (ev) => {
        ev.preventDefault()
        this.props.handleAuth({
            uid: `${this.state.email}-ksdfjhu32472398`,
            displayName: this.state.email,
            email: this.state.email,
      })


    }

    handleChange = (ev) => {
        this.setState({email:ev.target.value})
    }

    render() {
        return(
            <div className="SignIn">
                <form>
                    <input 
                        autoFocus
                        type="email"
                        name="email"
                        placeholder="Enter your Email"
                        value={this.state.email}
                        onChange={this.handleChange}

                    />
                    <button type="submit">
                        Sign In
                    </button>
                </form>
            </div>
        )
    }

}

export default SignIn