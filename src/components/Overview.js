import React, { Component } from 'react';
import '../style/body.css';

class Overview extends Component {
  render() {
    return (
        <div className='row overview'>
            <div className='col-12'>
                <table className='table table-bordered' >
                    <tr>
                        <th colSpan='2'>Overview</th>
                    </tr>
                    <tr>
                        <td className='status'>
                            <div>
                                <span className='left'>Status</span>
                                <span className='right text-success'>&#10004; Active</span>
                            </div>
                            <div>
                                <span className='left'>Method</span>
                                <span className='right'>Multimodal</span>
                            </div>
                            <div>
                                <span className='left'>Capacity</span>
                                <span className='right'>LCL</span>
                            </div>
                            <div>
                                <span className='left'>Drayage</span>
                                <span className='right'>Pickup,, Delivery</span>
                            </div>
                        </td>
                        <td className='details'>
                            <div>
                                <span className='left'>Incoterms</span>
                                <span className='right'>FOB</span>
                            </div>
                            <div>
                                <span className='left'>Service Options</span>
                                <span className='right'>Deconsolidations, Customs Clearance,</span>
                            </div>
                            <br/>
                            <br/>
                            <div>
                                <span className='left'>Hazardous or forbidden commodities</span>
                                <span className='right'>Lithium Batteries, Hazmat, Others</span>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
  }
}

export default Overview;
