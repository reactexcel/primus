import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { SideNav, Nav, NavIcon } from 'react-sidenav'

class SideBar extends Component {
    render() {
        return (
          <div 
          style={{
            width: '60px',
            marginLeft: '40px',
            backgroundColor: 'white'}}
          >
          <SideNav 
            defaultSelectedPath="1"
          >
            <Nav id="1">
              <NavIcon>
              <Link to='overview' >
                <i className="fa fa-fw fa-globe" style={{ fontSize: '1.75em',color:'gray' }} />
              </Link>
              </NavIcon>
            </Nav>
            <Nav id="2">
              <NavIcon>
                <i className="fa fa-fw fa-globe" style={{ fontSize: '1.75em',color:'gray' }} />
              </NavIcon>
            </Nav>
            <Nav id="3">
              <NavIcon>
                <i className="fa fa-fw fa-file-text" style={{ fontSize: '1.75em',color:'gray' }} />
              </NavIcon>
            </Nav>
            <Nav id="4">
              <NavIcon>
                <i className="fa fa-fw fa-globe" style={{ fontSize: '1.75em',color:'gray' }} />
              </NavIcon>
            </Nav>
            <Nav id="5">
              <NavIcon>
                <i className="fa fa-fw fa-globe" style={{ fontSize: '1.75em',color:'gray' }} />
              </NavIcon>
            </Nav>
            <Nav id="6">
              <NavIcon>
                <i className="fa fa-fw fa-bell" style={{ fontSize: '1.75em',color:'gray' }} />
              </NavIcon>
            </Nav>
            <Nav id="7">
              <NavIcon>
                <i className="fa fa-fw fa-globe" style={{ fontSize: '1.75em',color:'gray' }} />
              </NavIcon>
            </Nav>
            <Nav id="8">
              <NavIcon>
                <i className="fa fa-fw fa-globe" style={{ fontSize: '1.75em',color:'gray' }} />
              </NavIcon>
            </Nav>
            <Nav id="9">
              <NavIcon>
                <i className="fa fa-fw fa-share-alt" style={{ fontSize: '1.75em',color:'gray' }} />
              </NavIcon>
            </Nav>
            <Nav id="10">
              <NavIcon>
                <i className="fa fa-fw fa-exclamation-circle" style={{ fontSize: '1.75em',color:'gray' }} />
              </NavIcon>
            </Nav>
            <Nav id="11">
              <NavIcon>
                <i className="fa fa-fw fa-ban" style={{ fontSize: '1.75em',color:'gray' }} />
              </NavIcon>
            </Nav>
        </SideNav>
        </div>
        )
    }
}

export default SideBar;