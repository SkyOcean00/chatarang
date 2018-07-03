import React, { Component } from 'react'


const Message = (props)=>{
    
    return(
        <div className='Message'>
           {props.message.user.displayName}: {props.message.body}
        </div>
    )
}

export default Message