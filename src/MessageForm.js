import React, { Component } from 'react'


class MessageForm extends Component {
    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.addMessage()
    
    }
    render(){
        return(
            <form className='MessageForm'
                onSubmit={this.handleSubmit}
            >
            <input
                type="text"
                name="body"
                placeholder="Type a message..."
                autoFocus
                required
                />
                <input type="submit"
                value="Send"
                />
            </form>
        )
    }

}

export default MessageForm