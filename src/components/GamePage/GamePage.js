import React, { useState } from 'react';
import styles from './GamePage.module.css';
import './Wheel.css';

import {
  alert,
  info,
  error,
  success,
  defaultModules,
  Stack,
} from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';

defaultModules.set(PNotifyMobile, {});

const myStack = new Stack({
  dir1: 'down',
  dir2: 'left',
  firstpos1: 50,
  firstpos2: 50,
  spacing1: 36,
  spacing2: 36,
  push: 'bottom',
  context: document.body,
});

export default function GamePage() {
  const [balance, setBalance] = useState(1000);
  const [bet, setBet] = useState(0);
  const [valueWheel, setValueWheel] = useState(0);
  // eslint-disable-next-line
  const [valueBet, setValueBet] = useState(1);
  const [win, setWin] = useState(0);

  const start = () => {
    setValueWheel(Math.floor(Math.random() * (9 - 0) + 0));
    game();
  };

  const game = () => {
    if (Number(bet) === 0) {
      info({
        title: 'Place your bet!',
        delay: 3000,
        hide: true,
        width: '400px',
        stack: myStack,
      });
      return;
    }

    if (balance < bet) {
      alert({
        title: 'Not enough funds to bet!',
        delay: 3000,
        hide: true,
        width: '400px',
        stack: myStack,
      });
      setBet(0);
      return;
    }

    if (valueBet !== valueWheel) {
      error({
        title: 'Sorry, you lost :(',
        text: `You lost ${bet} credits!`,
        delay: 2000,
        hide: true,
        width: '400px',
        stack: myStack,
      });
      setBalance(balance - Number(bet));
      setWin(0);
    } else {
      success({
        title: 'Congratulations! You Win!',
        text: `You win ${bet} credits!`,
        delay: 2000,
        hide: true,
        width: '400px',
        stack: myStack,
      });
      setBalance(balance + Number(bet));
      setWin(bet);
    }
  };

  const betChange = e => {
    setBet(e.currentTarget.value);
  };

  // console.log(`Выбранный номер: ${valueBet}`);
  // console.log(`Выпавший номер: ${valueWheel}`);
  // console.log(`Баланс: ${balance}`);
  // console.log(`Ставка: ${bet}`);

  return (
    <>
      <div className="wheel-container">
        <div className="wheel">
          {/* <div className="sector red"></div>
          <div className="sector black"></div>
          <div className="sector red"></div>
          <div className="sector black"></div>
          <div className="sector red"></div>
          <div className="sector black"></div>
          <div className="sector red"></div>
          <div className="sector black"></div>
          <div className="sector green"></div> */}
        </div>
        <button className={styles.startGame} onClick={start}>
          SPIN
        </button>
      </div>

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
              name="bet"
              className={styles.input}
              value={bet}
              placeholder="Your bet"
              required
              onChange={betChange}
            />
          </label>
        </div>

        <div className={styles.label}>
          Your cheap:
          <div className={styles.value}>0</div>
        </div>

        <div className={styles.label}>
          Your Win:
          <div className={styles.value}>{win}</div>
        </div>
      </div>
      <div className={styles.gameField}>
        <div className={styles.groupZone}>
          <div className={styles.greenZone} id="green">
            0
          </div>
          <div className={styles.redZone} id="red">
            3
          </div>
          <div className={styles.blackZone} id="black">
            1
          </div>
        </div>
        <div className={styles.groupZone}>
          <div className={styles.redZone}>4</div>
          <div className={styles.blackZone}>6</div>
          <div className={styles.redZone}>8</div>
        </div>
        <div className={styles.groupZone}>
          <div className={styles.blackZone}>2</div>
          <div className={styles.redZone}>7</div>
          <div className={styles.blackZone}>5</div>
        </div>
        <div className={styles.groupZone}>
          <div className={styles.allBlackZone}>All black</div>
          <div className={styles.allRedZone}>All red</div>
        </div>
      </div>
    </>
  );
}
