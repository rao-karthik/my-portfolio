import { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';

import './App.scss';
import Layout from './Layout/Layout';
import { paths } from './constant';

function App(): ReactElement {
  return (
    <Layout>
      <Routes>
        <Route path={paths?.home} element={<Home />} />
        <Route path={paths?.about} element={<Home />} />
        <Route path={paths?.projects} element={<Home />} />
        <Route path={paths?.contact} element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
