import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';

import './App.scss';

function App(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
