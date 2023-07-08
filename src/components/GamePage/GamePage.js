import React, { useState, useEffect } from 'react';
import styles from './GamePage.module.css';

import { alert, info, error, success, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';

defaultModules.set(PNotifyMobile, {});

export default function GamePage() {
  const [balance, setBalance] = useState(1000);
  const [bet, setBet] = useState('');
  const [valueWheel, setValueWheel] = useState(null);
  const [valueChip, setValueChip] = useState([]);
  const [win, setWin] = useState(0);

  // const spinButton = document.getElementById('spin');
  const valueObjectChip = valueChip.map(object => object.value);
  const colorObjectChip = valueChip.map(object => object.color);

  useEffect(() => {
    if (!valueWheel) {
      return;
    }

    if (valueObjectChip.includes('All black')) {
      if (valueWheel.color === 'black') {
        if (colorObjectChip.includes(valueWheel?.color.toString())) {
          setBalance(balance + bet * 2);
          setWin(bet * 2);
          success({
            title: 'Congratulations! You Win!',
            text: `You win ${bet * 2} credits!`,
            delay: 1000,
            hide: true,
            width: '400px',
          });
          if (valueObjectChip.includes(valueWheel?.value.toString())) {
            setBalance(balance + bet * 8);
            setWin(bet * 8);
            success({
              title: 'Congratulations! You Win!',
              text: `You win ${bet * 8} credits!`,
              delay: 1000,
              hide: true,
              width: '400px',
            });
          }
          return;
        }
        setBalance(balance - bet);
        setWin(0);
        error({
          title: 'Sorry, you lost :(',
          text: `You lost ${bet} credits!`,
          delay: 1000,
          hide: true,
          width: '400px',
        });
        return;
      }
    }

    if (valueObjectChip.includes('All red')) {
      if (valueWheel.color === 'red') {
        if (colorObjectChip.includes(valueWheel?.color.toString())) {
          setBalance(balance + bet * 2);
          setWin(bet * 2);
          success({
            title: 'Congratulations! You Win!',
            text: `You win ${bet * 2} credits!`,
            delay: 1000,
            hide: true,
            width: '400px',
          });
          if (valueObjectChip.includes(valueWheel?.value.toString())) {
            setBalance(balance + bet * 8);
            setWin(bet * 8);
            success({
              title: 'Congratulations! You Win!',
              text: `You win ${bet * 8} credits!`,
              delay: 1000,
              hide: true,
              width: '400px',
            });
          }
          return;
        }
        setBalance(balance - bet);
        setWin(0);
        error({
          title: 'Sorry, you lost :(',
          text: `You lost ${bet} credits!`,
          delay: 1000,
          hide: true,
          width: '400px',
        });
        return;
      }
    }

    if (!valueObjectChip.includes(valueWheel?.value.toString())) {
      setBalance(balance - bet);
      setWin(0);
      error({
        title: 'Sorry, you lost :(',
        text: `You lost ${bet} credits!`,
        delay: 1000,
        hide: true,
        width: '400px',
      });
    } else {
      setBalance(balance + bet * 8);
      setWin(bet * 8);
      success({
        title: 'Congratulations! You Win!',
        text: `You win ${bet * 8} credits!`,
        delay: 1000,
        hide: true,
        width: '400px',
      });
      return;
    }

    // spinButton.disabled = false;
    // eslint-disable-next-line
  }, [valueWheel]);

  const betChange = e => {
    setBet(Number(e.currentTarget.value));
  };

  const onSetChip = e => {
    if (valueObjectChip.includes(e.target.innerText)) {
      alert({
        title: 'You have already placed a bet on this zone!',
        delay: 1000,
        hide: true,
        width: '400px',
      });
      return;
    }
    setValueChip(prevValueChip => [
      ...prevValueChip,
      { value: e.target.innerText, color: e.target.id },
    ]);
    setValueWheel(null);
  };

  const valueChipToString = valueChip.map(object => object.value).join(', ');

  const spin = () => {
    if (balance === 0) {
      alert({
        title: 'Top up your balance to continue playing!',
        delay: 1000,
        hide: true,
        width: '400px',
      });
      return;
    }

    if (balance < bet) {
      alert({
        title: 'Not enough funds to bet!',
        delay: 1000,
        hide: true,
        width: '400px',
      });
      setBet(0);
      return;
    }

    if (!bet) {
      info({
        title: 'Place your bet!',
        delay: 1000,
        hide: true,
        width: '400px',
      });
      return;
    }

    if (!valueChip.length) {
      info({
        title: 'Place your chip!',
        delay: 1000,
        hide: true,
        width: '400px',
      });
      return;
    }

    // spinButton.disabled = true;
    // setValueWheel(Math.floor(Math.random() * (9 - 0) + 0).toString());

    const randomNumber = Math.floor(Math.random() * (9 - 0) + 0);
    if (randomNumber === 0) {
      setValueWheel({ value: randomNumber, color: 'green' });
    } else if (
      randomNumber === 3 ||
      randomNumber === 4 ||
      randomNumber === 8 ||
      randomNumber === 7
    ) {
      setValueWheel({ value: randomNumber, color: 'red' });
    } else if (
      randomNumber === 1 ||
      randomNumber === 2 ||
      randomNumber === 5 ||
      randomNumber === 6
    ) {
      setValueWheel({ value: randomNumber, color: 'black' });
    }
  };

  const clearChip = () => {
    setValueChip([]);
    setValueWheel(null);
  };

  // console.log(valueWheel?.value);
  // console.log(valueWheel);
  // console.log(valueChip);
  // console.log(colorObjectChip);

  return (
    <>
      <div className={styles.valueWheel}>{valueWheel?.value}</div>

      <button className={styles.startGame} id="spin" onClick={spin}>
        SPIN
      </button>

      <div className={styles.container}>
        <div className={styles.label}>
          Your balance:
          <div className={styles.value}>{balance}</div>
        </div>

        <div className={styles.label}>
          <label>
            Your Bet:
            <input
              type="number"
              min={0}
              name="bet"
              className={styles.input}
              value={bet}
              placeholder="Your bet"
              onChange={betChange}
            />
          </label>
        </div>

        <div className={styles.label}>
          Your Chip:
          <div className={styles.value}>{valueChipToString}</div>
        </div>

        <div className={styles.label}>
          Your Win:
          <div className={styles.value}>{win}</div>
        </div>
      </div>

      <button className={styles.startGame} onClick={clearChip}>
        CLEAR CHIP
      </button>

      <div className={styles.gameField}>
        <div className={styles.groupZone}>
          <div className={styles.greenZone} id="green" onClick={onSetChip}>
            0
          </div>
          <div className={styles.redZone} id="red" onClick={onSetChip}>
            3
          </div>
          <div className={styles.blackZone} id="black" onClick={onSetChip}>
            1
          </div>
        </div>
        <div className={styles.groupZone}>
          <div className={styles.redZone} id="red" onClick={onSetChip}>
            4
          </div>
          <div className={styles.blackZone} id="black" onClick={onSetChip}>
            6
          </div>
          <div className={styles.redZone} id="red" onClick={onSetChip}>
            8
          </div>
        </div>
        <div className={styles.groupZone}>
          <div className={styles.blackZone} id="black" onClick={onSetChip}>
            2
          </div>
          <div className={styles.redZone} id="red" onClick={onSetChip}>
            7
          </div>
          <div className={styles.blackZone} id="black" onClick={onSetChip}>
            5
          </div>
        </div>
        <div className={styles.groupZone}>
          <div className={styles.allBlackZone} id="black" onClick={onSetChip}>
            All black
          </div>
          <div className={styles.allRedZone} id="red" onClick={onSetChip}>
            All red
          </div>
        </div>
      </div>
    </>
  );
}
