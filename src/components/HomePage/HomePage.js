import React from 'react';
import { NavLink } from 'react-router-dom';
import mainLogo from './mainLogo.png';
import styles from './HomePage.module.css';

const HomePage = () => (
  <div className={styles.rouletteHome}>
    <div>
      <h1>
        Welcome to online mini-roulette game!
        <img src={mainLogo} alt="logo" />
      </h1>
    </div>
    <div className={styles.rouletteButton}>
      <NavLink to="/game" className={styles.rouletteLink}>
        Play Now!
      </NavLink>
    </div>
  </div>
);

export default HomePage;
