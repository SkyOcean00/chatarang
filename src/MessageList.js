import React, { Component } from 'react'
import Message from './Message'

const MessageList = ()=>{
    const messages =[
        {id:1, userName: 'dstrus', body:'chatting up a storm, yo!'},
        {id:2, userName: 'dapoole', body:'This is a ttioip.'}
    ]
    return(
        <div className='MessageList'>
            {messages.map(msg => 
                <p>{msg.id}: {msg.body}</p>
            )}
        </div>
    )
}

export default MessageList