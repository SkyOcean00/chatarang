import React, { Component } from 'react'


class MessageForm extends Component {
    state = {
        body: '',
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.addMessage(this.state.body)
        this.setState({ body: '' })
    }


    handleChange = (ev) => {
        this.setState({ body: ev.target.value })
    }

    render() {
        return (
            <form className='MessageForm'
                onSubmit={this.handleSubmit}
            >
                <input
                    type="text"
                    name="body"
                    placeholder="Type a message..."
                    autoFocus
                    required
                    value={this.state.body}
                    onChange={this.handleChange}
                />
                <input type="submit"
                    value="Send"
                />
            </form>
        )
    }

}

export default MessageForm