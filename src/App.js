import React from 'react';
import Page from './Sign/Page';
import Paths from './Sign/Paths';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Paths />
    </BrowserRouter>
  );
}
