import React, { useState } from 'react';
import styles from './WheelOfFortune.module.css';

function WheelOfFortune() {
  const [rotation, setRotation] = useState(0);
  // eslint-disable-next-line
  const [stopIndex, setStopIndex] = useState(null);

  const startRotation = () => {
    setRotation(0);
    const randomStopIndex = Math.floor(Math.random() * 9); // Замените это значение на заранее известное число, на котором нужно остановить кручение
    setStopIndex(randomStopIndex);
    const finalRotation = 3600 + randomStopIndex * (360 / 9);
    setTimeout(() => setRotation(finalRotation), 500);
  };

  return (
    <div className={styles.wheelContainer}>
      <div
        className={styles.wheel}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className={`${styles.sector} ${styles.sector1}`}>Sector 1</div>
        <div className={`${styles.sector} ${styles.sector2}`}>Sector 2</div>
        <div className={`${styles.sector} ${styles.sector3}`}>Sector 3</div>
        <div className={`${styles.sector} ${styles.sector4}`}>Sector 4</div>
        <div className={`${styles.sector} ${styles.sector5}`}>Sector 5</div>
        <div className={`${styles.sector} ${styles.sector6}`}>Sector 6</div>
        <div className={`${styles.sector} ${styles.sector7}`}>Sector 7</div>
        <div className={`${styles.sector} ${styles.sector8}`}>Sector 8</div>
        <div className={`${styles.sector} ${styles.sector9}`}>Sector 9</div>
      </div>
      <button onClick={startRotation}>Spin</button>
    </div>
  );
}

export default WheelOfFortune;
