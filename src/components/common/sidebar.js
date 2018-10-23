import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { SideNav, Nav } from 'react-sidenav'

class SideBar extends Component {
    render() {
        return (
          <div 
          style={{
            width: '35%',
            marginLeft: '15%',
            backgroundColor: 'white'}}
          >
          <SideNav 
            defaultSelectedPath="1"
          >
            <Nav id="1">
               <Link to='/overView' >1</Link>
            </Nav>
            <Nav id="2">
               2
            </Nav>
            <Nav id="3">
               3
            </Nav>
        </SideNav>
        </div>
        )
    }
}

export default SideBar;