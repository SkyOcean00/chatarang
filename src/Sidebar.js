import React, { Component } from 'react'
import Userinfo from'./Userinfo'
import RoomList from './RoomList'

const styles = {
    sidebar: {
        backgroundColor: '#333344',
        color: 'rgba(255, 255, 255, 0.8)',
        width: '12rem',
        padding: '1rem 0',
        display: 'flex',
        flexDirection: 'column',
      },
    
      h1: {
        color: 'white',
        fontSize: '1.2rem',
        marginTop: 0,
        padding: '0 1rem',
      },
    sidebar: {
        backgroundColor: '#944743',
        color: 'rgba(255, 255, 255, 0.8)',
        width: '12rem',
        padding: '1rem 0',
        display: 'flex',
        flexDirection: 'column',
    },

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

class Sidebar extends Component {
    
    render() {
        return (
            <aside className="Sidebar" style={styles.sidebar}>
                <Userinfo user={this.props.user}/>

                <h1 style={styles.h1}>XTBC 18</h1>

                <RoomList />
                
            </aside>
        );
    }

    

}

export default Sidebar