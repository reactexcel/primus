import React, { Component } from 'react';
import SideBar from './components/common/sidebar';
import Header from './components/common/header'


class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='container-fluid' style={{backgroundColor:'lightblue'}} >
          <div className='row' >
            <Header />
          </div>
        <div className='row' style={{paddingBottom:'80px'}} >
          <div className="col-md-2 col-sm-2 col-xs-2" >
            <SideBar />
          </div>
            <div className="col-md-8 col-sm-8 col-xs-8" >
              {this.props.children}
            </div>
        </div>
      </div>
    );
  }
}

export default App;
