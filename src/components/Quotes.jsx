/*eslint-disable*/
import React, { PureComponent } from 'react';

class Quotes extends PureComponent {
  render() {
    return (
      <div className='quote'>
        <blockquote>
          Mathematics is not about numbers, equations, comutation or algorithms:
          It is about understanding{' '}
        </blockquote>
        <cite>WIlliam Paul Thurston</cite>
      </div>
    );
  }
}

export default Quotes;
