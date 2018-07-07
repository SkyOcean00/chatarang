import React, { Component } from 'react'

const Userinfo = ({user}) => {
    return (
        <div className="UserInfo" style={styles.children}>
            <div className="Avatar"></div>
            <div className="user">
                {user.displayName}
            </div>
            <a href="#">
                <i className="fas fa-sign-out-alt"></i>
            </a>
        </div>
    )
}

const styles = {
    children: {
        padding: '0 1rem',
    },

    h1: {
        color: 'white',
        fontSize: '1.2rem',
        marginTop: 0,
        marginLeft: 5,
        padding: '0 1rem',
    },

    coco: {

        color: 'white',
        fontsize: '26px',
        fontFamily: 'Verdana italic',
    }
}

export default Userinfo
