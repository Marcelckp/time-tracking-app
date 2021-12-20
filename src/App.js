import './App.css';
import MainHead from './Components/MainHead/mainHead';
import LittleHead from './Components/LittleHead/LittleHead';
import Data from './data.json';
import { Component } from 'react'

class App extends Component {
  constructor(){
    super()
    this.state = {
      timeFrame: 'daily'
    }
  }
  
  changeTimeFrame = (timeFrame) => {
    this.setState({timeFrame: timeFrame});
  }
  
  render() {
    // console.log(this.state.timeFrame);

    return (
      <div className="App">
          <div className='main__container'>
            <MainHead time={this.state.timeFrame} changeTime={this.changeTimeFrame} />
            
            <div className='littleH__container'>
              <div className='littleH__container__row1'>
                {Data.map((val, index) => {
                  if (index < 3){
                    return <LittleHead timeFrame={this.state.timeFrame} key={index} data={val} />
                  } else return;
                })}
              </div>
              <div className='littleH__container__row2'>
                {Data.map((val, index) => {
                  if (index > 2){
                    return <LittleHead timeFrame={this.state.timeFrame} key={index} data={val} />
                  } else return;
                })}
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
