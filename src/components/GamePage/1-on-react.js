import React, { useState, useEffect } from 'react';
import styles from './1-on-react.module.css';

const WheelOfFortune = ({ value }) => {
  const [rotation, setRotation] = useState(0);
  const [stopRotation, setStopRotation] = useState(false);

  useEffect(() => {
    if (stopRotation) {
      const targetRotation = value * 40; // Угол поворота для остановки на выбранном значении
      const randomRevolutions = Math.floor(Math.random() * 5) + 1; // Случайное количество полных оборотов
      const totalRotation = randomRevolutions * 360 + targetRotation; // Общий угол поворота, включая полные обороты

      setRotation(totalRotation);
    }
  }, [value, stopRotation]);

  const handleButtonClick = () => {
    setStopRotation(true);
  };

  return (
    <>
      <div
        className={styles.wheel}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className={`${styles.sector} ${styles.black}`}>1</div>
        <div className={`${styles.sector} ${styles.black}`}>2</div>
        <div className={`${styles.sector} ${styles.black}`}>6</div>
        <div className={`${styles.sector} ${styles.black}`}>5</div>
        <div className={`${styles.sector} ${styles.red}`}>3</div>
        <div className={`${styles.sector} ${styles.red}`}>4</div>
        <div className={`${styles.sector} ${styles.red}`}>8</div>
        <div className={`${styles.sector} ${styles.red}`}>7</div>
        <div className={`${styles.sector} ${styles.green}`}>0</div>
        <div className={styles.arrow} />
      </div>
      <button onClick={handleButtonClick}>Вращать колесо</button>
    </>
  );
};

export default WheelOfFortune;
