import React, { Component } from 'react';
import SideBar from './components/common/sidebar';
import Header from './components/common/header'
import Routes from './router'


class App extends Component {
  render() {
    return (
      <div style={{backgroundColor:'lightblue',height:'-webkit-fill-available'}} >
        <div className='row' >
          <div className="col-md-2" >
            <SideBar />
          </div>
          <div className="col-md-8" >
              component
          </div>
        </div>
      </div>
    );
  }
}

export default App;
