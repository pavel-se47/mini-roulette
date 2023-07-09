import React, { useState, useEffect } from 'react';
import styles from './GamePage.module.css';
// import { nanoid } from 'nanoid';
// import WheelOfFortune from './WheelOfFortune';

import { alert, info, error, success, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';

defaultModules.set(PNotifyMobile, {});

export default function GamePage() {
  const [balance, setBalance] = useState(1000);
  const [bet, setBet] = useState(20);
  const [valueWheel, setValueWheel] = useState(null);
  const [valueChip, setValueChip] = useState([]);
  const [win, setWin] = useState(0);
  const [limit, setLimit] = useState(20);
  const [activeBet, setActiveBet] = useState({
    10: 'disabled',
    20: 'active',
    50: 'disabled',
    100: 'disabled',
    150: 'disabled',
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    console.log(valueChip);
    console.log(bet);
    console.log(betOnChipRender);

    // eslint-disable-next-line
  }, [valueChip, bet]);

  useEffect(() => {
    if (!valueWheel) {
      return;
    }

    valueChip.forEach(object => {
      if (object.value.includes('AB') || object.value.includes('AR')) {
        return;
      }
      if (!object.value.includes(valueWheel?.value.toString())) {
        error({
          title: `Sorry, you number ${object.value} lost :( NUMBERS`,
          text: `You lost ${object.currentBet} credits!`,
          delay: 1000,
          hide: true,
          width: '400px',
        });
        return;
      } else {
        setBalance(prevBalance => prevBalance + object.currentBet * 8);
        setWin(object.currentBet * 8);
        success({
          title: `Congratulations! You number ${object.value} win! NUMBERS`,
          text: `You win ${object.currentBet * 8} credits!`,
          delay: 1000,
          hide: true,
          width: '400px',
        });
        return;
      }
    });

    setButtonDisabled(false);

    valueChip.forEach(object => {
      const colorUpperCase = object.color.toUpperCase();

      if (
        object.value.includes('AB') &&
        valueWheel.color === 'black' &&
        object.color.includes(valueWheel?.color.toString())
      ) {
        setBalance(prevBalance => prevBalance + object.currentBet * 2);
        setWin(object.currentBet * 2);
        success({
          title: `Congratulations! You color ${colorUpperCase} win!`,
          text: `You win ${object.currentBet * 2} credits!`,
          delay: 1000,
          hide: true,
          width: '400px',
        });

        if (object.value.includes(valueWheel?.value.toString())) {
          setBalance(prevBalance => prevBalance + object.currentBet * 8);
          setWin(object.currentBet * 8);
          success({
            title: `Congratulations! You number ${object.value} win!`,
            text: `You win ${object.currentBet * 8} credits!`,
            delay: 1000,
            hide: true,
            width: '400px',
          });
        }

        setButtonDisabled(false);
        return;
      } else if (object.value.includes('AB')) {
        error({
          title: `Sorry, you color ${colorUpperCase} lost :(`,
          text: `You lost ${object.currentBet} credits!`,
          delay: 1000,
          hide: true,
          width: '400px',
        });
      }

      if (
        object.value.includes('AR') &&
        valueWheel.color === 'red' &&
        object.color.includes(valueWheel?.color.toString())
      ) {
        setBalance(prevBalance => prevBalance + object.currentBet * 2);
        setWin(object.currentBet * 2);
        success({
          title: `Congratulations! You color ${colorUpperCase} win!`,
          text: `You win ${object.currentBet * 2} credits!`,
          delay: 1000,
          hide: true,
          width: '400px',
        });

        if (object.value.includes(valueWheel?.value.toString())) {
          setBalance(prevBalance => prevBalance + object.currentBet * 8);
          setWin(object.currentBet * 8);
          success({
            title: `Congratulations! You number ${object.value} win!`,
            text: `You win ${object.currentBet * 8} credits!`,
            delay: 1000,
            hide: true,
            width: '400px',
          });
        }

        setButtonDisabled(false);
        return;
      } else if (object.value.includes('AR')) {
        error({
          title: `Sorry, you color ${colorUpperCase} lost :(`,
          text: `You lost ${object.currentBet} credits!`,
          delay: 1000,
          hide: true,
          width: '400px',
        });
      }
    });

    setButtonDisabled(false);

    return () => {
      setWin(0);
    };

    // eslint-disable-next-line
  }, [valueWheel]);

  const onSetBet = e => {
    setBet(Number(e.target.innerText));
    onSetActiveBet(e.target.innerText);
  };

  const onSetActiveBet = bet => {
    for (let key in activeBet) {
      if (key === bet) {
        activeBet[key] = 'active';
      } else {
        activeBet[key] = 'disabled';
      }
    }
  };

  // const valueBetRender = bet.includes(
  //   <div
  //     className={`${styles.betOnChip} ${
  //       object.value === '10' ? styles.bet10 : ''
  //     } ${object.value === '20' ? styles.bet20 : ''} ${
  //       object.value === '50' ? styles.bet50 : ''
  //     } ${object.value === '100' ? styles.bet100 : ''} ${
  //       object.value === '150' ? styles.bet150 : ''
  //     }`}
  //   >
  //     {object.value}
  //   </div>
  // );

  const onSetChip = e => {
    // valueChip.forEach(object => {
    //   if (object.value.includes(e.target.innerText)) {
    //     alert({
    //       title: 'You have already placed a bet on this zone!',
    //       delay: 1000,
    //       hide: true,
    //       width: '400px',
    //     });
    //     return;
    //   }
    // });

    if (valueObjectChip.includes(e.target.innerText)) {
      alert({
        title: 'You have already placed a bet on this zone!',
        delay: 1000,
        hide: true,
        width: '400px',
      });
      return;
    }

    if (e.target.innerText === 'AB' || e.target.innerText === 'AR') {
      setLimit(100);
      if (bet > 100) {
        alert({
          title: 'You have exceeded the current limit!',
          delay: 1000,
          hide: true,
          width: '400px',
        });
        return;
      }
    } else {
      setLimit(20);
      if (bet > 20) {
        alert({
          title: 'You have exceeded the current limit!',
          delay: 1000,
          hide: true,
          width: '400px',
        });
        return;
      }
    }

    setValueChip(prevValueChip => [
      ...prevValueChip,
      { value: e.target.innerText, color: e.target.id, currentBet: bet },
    ]);
    setBalance(prevBalance => prevBalance - bet);
    setValueWheel(null);
  };

  const valueObjectChip = valueChip.map(object => object.value);

  const betOnChipRender = valueChip.map(object => (
    <div
      key={object.value}
      className={`${styles.betOnChip} ${
        object.currentBet === 10 ? styles.bet10 : ''
      } ${object.currentBet === 20 ? styles.bet20 : ''} ${
        object.currentBet === 50 ? styles.bet50 : ''
      } ${object.currentBet === 100 ? styles.bet100 : ''} ${
        object.currentBet === 150 ? styles.bet150 : ''
      }`}
    >
      {object.currentBet}
    </div>
  ));

  // const valueChipRender = valueChip.map(object => (
  //   <div
  //     key={object.value}
  //     className={`${styles.chipZone} ${
  //       object.color === 'green' ? styles.green : ''
  //     } ${object.color === 'black' ? styles.black : ''} ${
  //       object.color === 'red' ? styles.red : ''
  //     }`}
  //   >
  //     {object.value}
  //   </div>
  // ));

  const spin = () => {
    setButtonDisabled(true);

    if (balance === 0) {
      alert({
        title: 'Top up your balance to continue playing!',
        delay: 1000,
        hide: true,
        width: '400px',
      });
      setButtonDisabled(false);
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
      setButtonDisabled(false);
      return;
    }

    if (!bet) {
      info({
        title: 'Place your bet!',
        delay: 1000,
        hide: true,
        width: '400px',
      });
      setButtonDisabled(false);
      return;
    }

    if (!valueChip.length) {
      info({
        title: 'Place your chip!',
        delay: 1000,
        hide: true,
        width: '400px',
      });
      setButtonDisabled(false);
      return;
    }

    const randomNumber = Math.floor(Math.random() * (9 - 0) + 0);

    setTimeout(() => {
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
    }, 1000);
  };

  const clearChip = () => {
    setValueChip([]);
    setValueWheel(null);
    setWin(0);
    setBet(20);
    setLimit(20);
    setActiveBet({
      10: 'disabled',
      20: 'active',
      50: 'disabled',
      100: 'disabled',
      150: 'disabled',
    });
  };

  return (
    <>
      {/* <WheelOfFortune value={valueWheel} /> */}

      <div className={styles.valueWheel}>{valueWheel?.value}</div>

      <button
        className={styles.startGame}
        id="spin"
        onClick={spin}
        disabled={buttonDisabled}
      >
        SPIN
      </button>

      <div className={styles.container}>
        <div className={styles.label}>
          Your balance:
          <div className={styles.value}>{balance}</div>
        </div>

        <div className={styles.label}>
          Your current bet:
          <div className={styles.value}>{!bet ? '-' : bet}</div>
        </div>

        <div className={styles.label}>
          Your current win:
          <div className={styles.value}>{!win ? '-' : win}</div>
        </div>
      </div>

      <div className={styles.containerCurrentLimit}>
        <h2>Current limits</h2>
        <div className={styles.groupZoneLimit}>
          <div className={styles.colors}>
            {limit === 0 ? '-' : `${'max ' + limit + ' credits'}`}
          </div>
        </div>
      </div>

      <div className={styles.containerLimit}>
        <div className={styles.groupZoneLimit}>
          <h2>Limits colors bet</h2>
          <div className={styles.colors}>max 100 credits</div>
        </div>
        <div className={styles.groupZoneLimit}>
          <h2>Limits numbers bet</h2>
          <div className={styles.numbers}>max 20 credits</div>
        </div>
      </div>

      <button className={styles.startGame} onClick={clearChip}>
        CLEAR CHIP
      </button>

      <div className={styles.gameField}>
        <div className={styles.betZone}>
          Your bet:
          <div
            className={`${styles.bet} ${styles.bet10} ${
              activeBet[10] === 'active' ? styles.activeBet : null
            }`}
            onClick={onSetBet}
          >
            10
          </div>
          <div
            className={`${styles.bet} ${styles.bet20}  ${
              activeBet[20] === 'active' ? styles.activeBet : null
            }`}
            onClick={onSetBet}
          >
            20
          </div>
          <div
            className={`${styles.bet} ${styles.bet50}  ${
              activeBet[50] === 'active' ? styles.activeBet : null
            }`}
            onClick={onSetBet}
          >
            50
          </div>
          <div
            className={`${styles.bet} ${styles.bet100}  ${
              activeBet[100] === 'active' ? styles.activeBet : null
            }`}
            onClick={onSetBet}
          >
            100
          </div>
          <div
            className={`${styles.bet} ${styles.bet150}  ${
              activeBet[150] === 'active' ? styles.activeBet : null
            }`}
            onClick={onSetBet}
          >
            150
          </div>
        </div>
        <div className={styles.betChipZone}>
          Chip zone
          <div className={styles.groupZone}>
            <div className={styles.greenZone} id="green" onClick={onSetChip}>
              {betOnChipRender.filter(item => item.key === '0')}0
            </div>
            <div className={styles.redZone} id="red" onClick={onSetChip}>
              {betOnChipRender.filter(item => item.key === '3')}3
            </div>
            <div className={styles.blackZone} id="black" onClick={onSetChip}>
              {betOnChipRender.filter(item => item.key === '1')}1
            </div>
          </div>
          <div className={styles.groupZone}>
            <div className={styles.redZone} id="red" onClick={onSetChip}>
              {betOnChipRender.filter(item => item.key === '4')}4
            </div>
            <div className={styles.blackZone} id="black" onClick={onSetChip}>
              {betOnChipRender.filter(item => item.key === '6')}6
            </div>
            <div className={styles.redZone} id="red" onClick={onSetChip}>
              {betOnChipRender.filter(item => item.key === '8')}8
            </div>
          </div>
          <div className={styles.groupZone}>
            <div className={styles.blackZone} id="black" onClick={onSetChip}>
              {betOnChipRender.filter(item => item.key === '2')}2
            </div>
            <div className={styles.redZone} id="red" onClick={onSetChip}>
              {betOnChipRender.filter(item => item.key === '7')}7
            </div>
            <div className={styles.blackZone} id="black" onClick={onSetChip}>
              {betOnChipRender.filter(item => item.key === '5')}5
            </div>
          </div>
          <div className={styles.groupZone}>
            <div className={styles.allBlackZone} id="black" onClick={onSetChip}>
              {betOnChipRender.filter(item => item.key === 'AB')}
              AB
            </div>
            <div className={styles.allRedZone} id="red" onClick={onSetChip}>
              {betOnChipRender.filter(item => item.key === 'AR')}
              AR
            </div>
          </div>
        </div>

        {/* <div key={nanoid()} className={styles.label}>
          Your chip:
          <div className={styles.value}>{valueChipRender}</div>
        </div> */}
      </div>
    </>
  );
}
