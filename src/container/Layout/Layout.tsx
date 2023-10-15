import React, { ReactNode } from 'react';

import Header from '../../components/Common/Header/Header';

import useHeaderHeight from '../../CustomHooks/useHeaderHeight/useHeaderHeight';

import styles from './Layout.module.scss';

interface ILayout {
  children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  const headerHeight = useHeaderHeight();

  return (
    <div className={styles?.layout_wrapper}>
      <div className={styles?.app_bg}></div>

      <Header />

      <div style={{ paddingTop: headerHeight }}>{children}</div>
    </div>
  );
};

export default Layout;
