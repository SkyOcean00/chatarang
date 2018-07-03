import React, { Component } from 'react'


const MessageForm = (props)=>{
    
    return(
        <form className='MessageForm'>
           <input
            type="text"
            name="body"
            placeholder="Type a message..."
            autofocus
            required
            />
            <input type="submit"
            value="Send" />
        </form>
    )
}

export default MessageForm