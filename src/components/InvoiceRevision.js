import React, { Component } from 'react';
import '../style/body.css';

class InvoiceRevision extends Component {
    render() {
        return (
            <div className='row invoice-revision'>
                <h2 className="invoice" >Invoice <span>S03834754</span></h2>
                <div className='col-12'>
                    <table className='table table-bordered' >
                        <tr>
                            <th colSpan='3'>Invoice Revision</th>
                        </tr>
                        <tr>
                            <td className='summary'>
                                <div>
                                    <span className='left'>Invoice #</span>
                                    <span className='right'>33-0092kk00</span>
                                </div>
                                <div>
                                    <span className='left'>Date</span>
                                    <span className='right'>7/31/18</span>
                                </div>
                                <div>
                                    <span className='left'>Due Date</span>
                                    <span className='right'>7/31/18</span>
                                </div>
                                <div>
                                    <span className='left'>Terms</span>
                                    <span className='right'>Net 0</span>
                                </div>
                            </td>
                            <td className='bill-to'>
                                <h6>Bill To</h6>
                            </td>
                            <td className='balance'>
                                <h6>New Balance upon Re-booking</h6>
                                <h5>$452.45</h5>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default InvoiceRevision;
