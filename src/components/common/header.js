import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header className="navbar navbar-expand-md navbar-light" style={{backgroundColor:'white',width:'100%'}} >
                <div className="container" style={{marginLeft:'5px',marginRight:'5px'}} >
                    <a className="navbar-brand" href="/">
                      {/* <img src={logo} alt=""/> */}
                      App Icon
                    </a>
                    <button className="navbar-toggler ml-3" data-toggle="collapse" data-target="#menu" aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center py-3 py-md-0" id="menu">
                    <ul className="navbar-nav w-100  pb-3 pb-md-0">
                        <li className="nav-item"><a className="nav-link" href="/">Dashboard</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Shipment</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Quotes</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Transactions</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Integration</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Packages</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Network</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Freight Bill</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Reports</a></li>
                    </ul>
                    <button type="button" className="btn btn-primary ml-auto mr-1">Login</button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;