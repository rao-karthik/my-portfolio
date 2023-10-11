import React, { ReactNode } from 'react';

import Header from '../../components/Common/Header/Header';

import styles from './Layout.module.scss';

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div className={styles?.layout_wrapper}>
      <div className={styles?.app_bg}></div>
      <div>
        <Header />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
