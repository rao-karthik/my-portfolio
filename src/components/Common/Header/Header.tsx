import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss';
import { paths } from '../../../container/constant';

const headerTabs = [
  {
    label: 'Home',
    path: paths?.home,
  },
  {
    label: 'About',
    path: paths?.about,
  },
  {
    label: 'Projects',
    path: paths?.projects,
  },
  {
    label: 'Contact',
    path: paths?.contact,
  },
];

const Header = () => {
  return (
    <div className={styles?.header_wrapper} id="header">
      <header>
        <div className={styles?.left_wrapper}>
          <div className={styles?.logo_wrapper}>
            <img src="/images/logo/whiteLogo.svg" alt="K" />
            ARTIK
          </div>

          <nav className={styles?.navigation}>
            {headerTabs?.map((_tab) => (
              <NavLink
                to={_tab?.path}
                caseSensitive
                end
                className={({ isActive }) => `${styles?.tab} ${isActive ? styles?.active_tab : ''}`}
                key={_tab?.label}
              >
                {_tab?.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div></div>
      </header>
    </div>
  );
};

export default memo(Header);
