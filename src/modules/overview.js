import React, { Component } from 'react';
import '../style/body.css';
import InvoiceRevision from '../components/InvoiceRevision.js';
import DiagramMap from '../components/DiagramMap.js';
import Overview from '../components/Overview.js';

class OverView extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: 'diagram'
    };
  }
  render() {
    return (
      <div className='row body-color'>
        <div className="container">
          <div className='row'>
            <div className='col-12'>
              <InvoiceRevision />
              <div className="row diagram-map-button">
                <div class="btn-group">
                  <button type="button" class="btn btn-default" onClick={e => this.setState({show: 'diagram'})}>Diagram</button>
                  <button type="button" class="btn btn-default" onClick={e => this.setState({show: 'map'})}>Map</button>
                </div>
                <span><b>Text</b></span>
              </div>
              <DiagramMap show={this.state.show}/>
              <Overview />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OverView;
