import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Claculator from './components/Calculator';
import Home from './components/Home';
import Quotes from './components/Quotes';
import Navbar from './components/Navabar';
import './index.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <>
        <div className="spa">
          <Navbar />
          <Routes>
            <Route path="/calculator" element={<Claculator />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
