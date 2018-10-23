import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { SideNav, Nav } from 'react-sidenav'

class SideBar extends Component {
    render() {
        return (
          <div 
          style={{
            width: '40%',
            marginLeft: '40%',
            backgroundColor: 'white'}}
          >
          <SideNav 
            defaultSelectedPath="1"
          >
            <Nav id="1">Item 1</Nav>
            <Nav id="2">Item 2</Nav>
            <Nav id="3">Item 3</Nav>
        </SideNav>
        </div>
        )
    }
}

export default SideBar;