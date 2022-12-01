import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Claculator extends React.Component {
  render() {
    return (
      <div className="cal-grid">
        <div className="cal-result">0</div>
        <div className="cal-btn-body">
          <div className="row">
            <div className="col-1 col">Ac</div>
            <div className="col-2 col">+/-</div>
            <div className="col-3 col">%</div>
            <div className="col-4 col">/</div>
          </div>
          <div className="row">
            <div className="col-1 col">7</div>
            <div className="col-2 col">8</div>
            <div className="col-3 col">9</div>
            <div className="col-4 col">x</div>
          </div>
          <div className="row">
            <div className="col-1 col">4</div>
            <div className="col-2 col">5</div>
            <div className="col-3 col">6</div>
            <div className="col-4 col">-</div>
          </div>
          <div className="row">
            <div className="col-1 col">1</div>
            <div className="col-2 col">2</div>
            <div className="col-3 col">3</div>
            <div className="col-4 col">+</div>
          </div>
          <div className="row">
            <div className="col-1 span col">0</div>
            <div className="col-3 col">.</div>
            <div className="col-4 col">=</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Claculator;
