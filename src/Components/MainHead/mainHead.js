import { Component } from 'react';
import './mainHead.css';

import jeremy from '../../images/image-jeremy.png'

class MainHead extends Component {

    render() {

        // console.log(this.props)

        return(
            <div className="Main__Head">

                <div className='top__div'> 

                    <div className="content__container">

                        <div className="col__1">
                            <div className="circle__backdrop">
                                <img className='Image' src={jeremy} alt="" />
                            </div>
                        </div>

                        <div className="col__2">

                            <div className="report__div">
                                <h1>Report for</h1>
                            </div>

                            <div className="name__div">
                                <h1>Jeremy Robson</h1>
                            </div>

                        </div>

                    </div>

                </div>

                <div className='bottom__div'>
                    <div className='bottom__content'>
                        <div className={`daily__div ${this.props.time === 'daily' ? 'active' : '' }`}  style={{cursor: 'pointer'}}>
                            <h1 className="daily" onClick={() => this.props.changeTime('daily')} >Daily</h1>
                        </div>

                        <div className={`weekly__div ${this.props.time === 'weekly' ? 'active' : ''}`} style={{cursor: 'pointer'}} onClick={() => this.props.changeTime('weekly')}>
                            <h1 className="weekly">Weekly</h1>
                        </div>
                        
                        <div className={`monthly__div ${this.props.time === 'monthly' ? 'active' : ''}`} style={{cursor: 'pointer'}} >
                            <h1 className="monthly" onClick={() => this.props.changeTime('monthly')} >Monthly</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainHead;