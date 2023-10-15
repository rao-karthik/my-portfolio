import React from 'react';

import ProfileIntro from './ProfileIntro/ProfileIntro';

import styles from './HomeComp.module.scss';

const HomeComp = () => {
  return (
    <div className={styles?.home_data_wrapper} id="header">
      <ProfileIntro />
    </div>
  );
};

export default HomeComp;
