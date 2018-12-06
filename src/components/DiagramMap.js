import React, { Component } from 'react';
import '../style/body.css';
import factory from '../assets/svg/factory.svg';
import map from '../assets/map.png';

class DiagramMap extends Component {
    render() {
        console.log(this.props.show)
        return (
            <div className='row diagram-map'>
                <div className='col-12'>
                    <table className='table table-bordered'>
                        <tr>
                            {
                                this.props.show == 'diagram' ?
                                    <th className='diagram'>
                                        <div>
                                            <span><img src={factory} alt='factory' /></span>
                                            <span><img src={factory} alt='factory' /></span>
                                            <span><img src={factory} alt='factory' /></span>
                                            <span><img src={factory} alt='factory' /></span>
                                            <span><img src={factory} alt='factory' /></span>
                                            <span><img src={factory} alt='factory' /></span>
                                            <span><img src={factory} alt='factory' /></span>
                                        </div>
                                    </th>
                                :
                                    <th className='map'>
                                    </th>
                            }
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default DiagramMap;
