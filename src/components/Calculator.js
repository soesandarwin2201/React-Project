/*eslint-disable*/
import { useState } from 'react';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
const  Claculator = () =>  {
    const result  = {
      total: 0,
      next: null,
      operation: null,
    };
    
    const [state , setState ] = useState(result);
 
   const eventHandler = (e) => {
    setState(calculate(state, e.target.textContent));
  }

   const { total, next, operation } = this.state;
    return (
      <>
        <div className='app'>
          <div className='calculator-title'>
            <h1>Let's do some math!</h1>
          </div>
          <div className='cal-grid'>
            <div className='cal-result'>
              <p>{total}</p>
              <p>{operation}</p>
              <p>{next}</p>
            </div>
            <div className='cal-btn-body'>
              <div className='row'>
                <div onClick={this.eventHandler} className='col-1 col'>
                  AC
                </div>
                <div onClick={this.eventHandler} className='col-2 col'>
                  +/-
                </div>
                <div onClick={this.eventHandler} className='col-3 col'>
                  %
                </div>
                <div onClick={this.eventHandler} className='col-4 col'>
                  ÷
                </div>
              </div>
              <div className='row'>
                <div onClick={this.eventHandler} className='col-1 col'>
                  7
                </div>
                <div onClick={this.eventHandler} className='col-2 col'>
                  8
                </div>
                <div onClick={this.eventHandler} className='col-3 col'>
                  9
                </div>
                <div onClick={this.eventHandler} className='col-4 col'>
                  x
                </div>
              </div>
              <div className='row'>
                <div onClick={this.eventHandler} className='col-1 col'>
                  4
                </div>
                <div onClick={this.eventHandler} className='col-2 col'>
                  5
                </div>
                <div onClick={this.eventHandler} className='col-3 col'>
                  6
                </div>
                <div onClick={this.eventHandler} className='col-4 col'>
                  -
                </div>
              </div>
              <div className='row'>
                <div onClick={this.eventHandler} className='col-1 col'>
                  1
                </div>
                <div onClick={this.eventHandler} className='col-2 col'>
                  2
                </div>
                <div onClick={this.eventHandler} className='col-3 col'>
                  3
                </div>
                <div onClick={this.eventHandler} className='col-4 col'>
                  +
                </div>
              </div>
              <div className='row'>
                <div onClick={this.eventHandler} className='col-1 span col'>
                  0
                </div>
                <div onClick={this.eventHandler} className='col-3 col'>
                  .
                </div>
                <div onClick={this.eventHandler} className='col-4 col'>
                  =
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  
}

export default Claculator;
