import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navabar';
import renderer from 'react-test-renderer';

describe('navbar render correctly', () => {
  it('render correctly', () => {
   const tree = renderer.create(
    <BrowserRouter>
    <Navbar />
    </BrowserRouter>
   ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
