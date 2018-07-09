import React, { Component } from 'react'
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import base from'./base'
import MessageForm from './MessageForm'


class Chat extends Component {
    constructor() {
        super()

        this.state = {
            messages: [],
        }
    }

    componentDidMount() {
            base.syncState(
              'messages/general',
              {
                context: this,
                state: 'messages',
                asArray: true,
             }
            )
          }

    addMessage = (body) => {
        const user = this.props.user
        const messages = [...this.state.messages]

        messages.push({
            id: `${user.uid}-${Date.now()}`,
            user,
            body,
        })
        this.setState({
            id: `${user.uid}-${Date.now()}`,
            user,
            body,
        })

        this.setState({ messages })
    }

    render() {
        return (
            <div className="Chat">

                <ChatHeader />
                <MessageList messages={this.state.messages} />
                <MessageForm addMessage={this.addMessage} />
            </div>
        );
    }


}

export default Chat