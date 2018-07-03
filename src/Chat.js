import React, { Component } from 'react'
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'

import MessageForm from './MessageForm'


class Chat extends Component{
    constructor(){
        super()

        this.state ={
            messages:[
                {id:1, userName: 'dstrus', body:'chatting up a storm, yo!'},
                {id:2, userName: 'dapoole', body:'This is a ttioip.'}
            ],
        }
    }    
    
 
    addMessage = () => {
        const userName = 'daniel'
        const messages = [...this.state.messages]

        messages.push({
            id: `${userName}-${Date.now()}`,
            userName: userName,
            body: 'Sorry, Dana. I love being a research intern!',
        })
        this.setState({ messages: messages })
    }

    render(){
        return(
            <div className="Chat">
                
                <ChatHeader />
                <MessageList messages= {this.state.messages} />
                <MessageForm addMessage={this.addMessage}  />
            </div>
        );
    }


}

export default Chat