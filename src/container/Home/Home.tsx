import React from 'react';

import HomeComp from '../../components/HomeComp/HomeComp';

import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles?.home_top_wrapper}>
      <HomeComp />
    </div>
  );
};

export default Home;
