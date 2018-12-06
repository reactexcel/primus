import React, { Component } from 'react'
import '../../style/header.css';
import search from '../../assets/svg/search.svg';
import notification from '../../assets/svg/notification.svg';
import information from '../../assets/svg/information.svg';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
          show: false
        };
    }
    render() {
        return (
            <header className="navbar navbar-expand-md navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <div class="hexagon"></div>
                    </a>
                    <button className="navbar-toggler ml-3" data-toggle="collapse" data-target="#menu" aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center py-3 py-md-0" id="menu">
                        <ul className="navbar-nav w-100  pb-3 pb-md-0">
                            <li className="nav-item"><a className="nav-link" href="#">Dashboard</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Network</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Network</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Network</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Network</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Network</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Billing</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Network</a></li>
                        </ul>
                        <img src={search} className="search ml-auto mr-1" />
                        <img src={information} className="search ml-auto mr-1" />
                        <img src={notification} className="search ml-auto mr-1" />
                        <div class={this.state.show ? "dropdown show" : "dropdown"}>
                        <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" onClick={e => this.setState({ show: !this.state.show })} >
                                <span className="user">JS</span>
                            <span class="caret"></span></button>
                            <ul class={this.state.show ? "dropdown-menu show" : "dropdown-menu"}>
                                <li><a href="#">HTML</a></li>
                                <li><a href="#">CSS</a></li>
                                <li><a href="#">JavaScript</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;