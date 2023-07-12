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
  const [bet, setBet] = useState(20);
  const [valueWheel, setValueWheel] = useState(null);
  const [valueChip, setValueChip] = useState([]);
  const [win, setWin] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [limit, setLimit] = useState(20);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [timer, setTimer] = useState(30);
  const [autoStart, setAutoStart] = useState(false);
  const [rotation, setRotation] = useState(null);
  const [activeBet, setActiveBet] = useState({
    10: 'disabled',
    20: 'active',
    50: 'disabled',
    100: 'disabled',
    150: 'disabled',
  });

  const generalBet = valueChip.map(object => object.currentBet);
  let generalBetSum = 0;
  generalBet.forEach(number => {
    generalBetSum += number;
  });

  useEffect(() => {
    if (autoStart) {
      const interval = setInterval(() => {
        setTimer(prevTimer => {
          if (prevTimer === 1) {
            spin();
            return 30;
          }
          return prevTimer - 1;
        });
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoStart, valueChip]);

  useEffect(() => {
    if (!valueWheel) {
      return;
    }

    if (autoStart) {
      setBalance(prevBalance => prevBalance - generalBetSum);
      if (balance === 0 && balance < bet) {
        alert({
          title: 'Top up your balance to continue playing!',
          delay: 1000,
          hide: true,
          width: '400px',
        });
        setAutoStart(false);
        setBalance(0);
        setBet(0);
        setValueChip([]);
        setButtonDisabled(false);
        setActiveBet({
          10: 'disabled',
          20: 'disabled',
          50: 'disabled',
          100: 'disabled',
          150: 'disabled',
        });
        return;
      }
    }

    valueChip.forEach(object => {
      if (object?.value?.includes('AB') || object?.value?.includes('AR')) {
        return;
      }
      if (!object?.value?.includes(valueWheel?.value?.toString())) {
        error({
          title: `Sorry, you number ${object.value} lost :(`,
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
          title: `Congratulations! You number ${object.value} win!`,
          text: `You win ${object.currentBet * 8} credits!`,
          delay: 1000,
          hide: true,
          width: '400px',
        });
        return;
      }
    });

    valueChip.forEach(object => {
      const colorUpperCase = object?.color?.toUpperCase();

      if (
        object?.value?.includes('AB') &&
        valueWheel.color === 'black' &&
        object?.color?.includes(valueWheel?.color.toString())
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

        if (object?.value?.includes(valueWheel?.value.toString())) {
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
      } else if (object?.value?.includes('AB')) {
        error({
          title: `Sorry, you color ${colorUpperCase} lost :(`,
          text: `You lost ${object.currentBet} credits!`,
          delay: 1000,
          hide: true,
          width: '400px',
        });
      }

      if (
        object?.value?.includes('AR') &&
        valueWheel.color === 'red' &&
        object?.color?.includes(valueWheel?.color.toString())
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

        if (object?.value?.includes(valueWheel?.value.toString())) {
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
      } else if (object?.value?.includes('AR')) {
        error({
          title: `Sorry, you color ${colorUpperCase} lost :(`,
          text: `You lost ${object.currentBet} credits!`,
          delay: 1000,
          hide: true,
          width: '400px',
        });
      }
    });

    if (!autoStart) {
      setValueChip([]);
    }

    setButtonDisabled(false);

    return () => {
      setWin(0);
    };

    // eslint-disable-next-line
  }, [valueWheel]);

  const setDegValue = value => {
    if (value === 0) {
      setRotation(570);
      return;
    } else if (value === 1) {
      setRotation(490);
      return;
    } else if (value === 2) {
      setRotation(690);
      return;
    } else if (value === 3) {
      setRotation(530);
      return;
    } else if (value === 4) {
      setRotation(450);
      return;
    } else if (value === 5) {
      setRotation(610);
      return;
    } else if (value === 6) {
      setRotation(410);
      return;
    } else if (value === 7) {
      setRotation(650);
      return;
    } else if (value === 8) {
      setRotation(370);
      return;
    }
  };

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

  const onSetChip = e => {
    let foundMatch = false;

    if (e?.target?.innerText === 'AB' || e?.target?.innerText === 'AR') {
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

    if (Object.values(activeBet).every(value => value === 'disabled')) {
      info({
        title: 'Place your bet!',
        delay: 1000,
        hide: true,
        width: '400px',
      });
      setButtonDisabled(false);
      return;
    }

    if (bet > balance) {
      alert({
        title: 'Not enough funds to bet!',
        delay: 1000,
        hide: true,
        width: '400px',
      });
      setBet(0);
      setActiveBet({
        10: 'disabled',
        20: 'disabled',
        50: 'disabled',
        100: 'disabled',
        150: 'disabled',
      });
      return;
    }

    valueChip.forEach(object => {
      if (object.value.includes(e?.target?.lastChild?.data)) {
        alert({
          title: 'You have already placed a bet on this zone!',
          delay: 1000,
          hide: true,
          width: '400px',
        });
        foundMatch = true;
      }
    });

    if (!foundMatch) {
      setValueChip(prevValueChip => [
        ...prevValueChip,
        {
          value: e?.target?.innerText,
          color: e?.target?.id,
          currentBet: bet,
        },
      ]);
      setBalance(prevBalance => prevBalance - bet);
      setValueWheel(null);
    }
    setButtonDisabled(false);
  };

  const spin = () => {
    setButtonDisabled(true);

    if (balance !== 0 && !bet) {
      info({
        title: 'Place your bet!!',
        delay: 1000,
        hide: true,
        width: '400px',
      });
      setButtonDisabled(false);
      return;
    }

    if (valueChip.length === 0) {
      info({
        title: 'Place your chip!',
        delay: 1000,
        hide: true,
        width: '400px',
      });
      setButtonDisabled(false);
      return;
    }

    if (!bet) {
      alert({
        title: 'Not enough funds to bet!',
        delay: 1000,
        hide: true,
        width: '400px',
      });
      setButtonDisabled(false);
      setBet(0);
      return;
    }

    const randomNumber = Math.floor(Math.random() * (8 - 0) + 0);

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
    }, 3000);

    setDegValue(randomNumber);
  };

  const clearChip = () => {
    if (balance === 0) {
      setBet(0);
    } else {
      setBet(20);
    }

    if (!balance && !bet) {
      setActiveBet({
        10: 'disabled',
        20: 'disabled',
        50: 'disabled',
        100: 'disabled',
        150: 'disabled',
      });
    } else {
      setActiveBet({
        10: 'disabled',
        20: 'active',
        50: 'disabled',
        100: 'disabled',
        150: 'disabled',
      });
    }

    setBalance(prevBalance => prevBalance + generalBetSum);
    setValueChip([]);
    setValueWheel(null);
    setWin(0);
    setLimit(20);
    setButtonDisabled(false);
  };

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

  return (
    <div className={styles.allPage}>
      <div className={styles.wheelOfFortune}>
        <div
          className={styles.component}
          style={
            buttonDisabled
              ? {
                  transform: `rotate(${rotation}deg)`,
                  transition: 'transform 3s ease-in-out',
                }
              : null
          }
        >
          <span id="num0" className={styles.num0}>
            0
          </span>
          <span id="num3" className={styles.num3}>
            3
          </span>
          <span id="num1" className={styles.num1}>
            1
          </span>
          <span id="num4" className={styles.num4}>
            4
          </span>
          <span id="num6" className={styles.num6}>
            6
          </span>
          <span id="num8" className={styles.num8}>
            8
          </span>
          <span id="num2" className={styles.num2}>
            2
          </span>
          <span id="num7" className={styles.num7}>
            7
          </span>
          <span id="num5" className={styles.num5}>
            5
          </span>

          <div className={`${styles.option} ${styles.option1}`}>0</div>
          <div className={`${styles.option} ${styles.option2}`}>1</div>
          <div className={`${styles.option} ${styles.option3}`}>2</div>
          <div className={`${styles.option} ${styles.option4}`}>3</div>
          <div className={`${styles.option} ${styles.option5}`}>4</div>
          <div className={`${styles.option} ${styles.option6}`}>5</div>
          <div className={`${styles.option} ${styles.option7}`}>6</div>
          <div className={`${styles.option} ${styles.option8}`}>7</div>
          <div className={`${styles.option} ${styles.option9}`}>8</div>
        </div>
        <button
          type="button"
          id="spin"
          onClick={spin}
          disabled={buttonDisabled}
          className={`${styles.spin} ${
            buttonDisabled ? styles.spinButtonDisabled : null
          } ${valueWheel?.color === 'green' ? styles.green : null} ${
            valueWheel?.color === 'red' ? styles.red : null
          } ${valueWheel?.color === 'black' ? styles.black : null}`}
        >
          {valueWheel?.value || valueWheel?.value === 0
            ? valueWheel?.value
            : 'SPIN'}
        </button>
      </div>
      <div>
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

        <div className={styles.gameField}>
          <div className={styles.betZone}>
            Your bet:
            <div
              className={`${styles.bet} ${styles.bet10} ${
                activeBet[10] === 'active' ? styles.activeBet : null
              } ${buttonDisabled ? styles.buttonDisabled : null}`}
              disabled={buttonDisabled}
              onClick={onSetBet}
            >
              10
            </div>
            <div
              className={`${styles.bet} ${styles.bet20}  ${
                activeBet[20] === 'active' ? styles.activeBet : null
              } ${buttonDisabled ? styles.buttonDisabled : null}`}
              disabled={buttonDisabled}
              onClick={onSetBet}
            >
              20
            </div>
            <div
              className={`${styles.bet} ${styles.bet50}  ${
                activeBet[50] === 'active' ? styles.activeBet : null
              } ${buttonDisabled ? styles.buttonDisabled : null}`}
              disabled={buttonDisabled}
              onClick={onSetBet}
            >
              50
            </div>
            <div
              className={`${styles.bet} ${styles.bet100}  ${
                activeBet[100] === 'active' ? styles.activeBet : null
              } ${buttonDisabled ? styles.buttonDisabled : null}`}
              disabled={buttonDisabled}
              onClick={onSetBet}
            >
              100
            </div>
            <div
              className={`${styles.bet} ${styles.bet150}  ${
                activeBet[150] === 'active' ? styles.activeBet : null
              } ${buttonDisabled ? styles.buttonDisabled : null}`}
              disabled={buttonDisabled}
              onClick={onSetBet}
            >
              150
            </div>
          </div>
          <div className={styles.betChipZone}>
            Chip zone
            <div className={styles.groupZone}>
              <div
                className={`${styles.greenZone} ${
                  buttonDisabled ? styles.buttonDisabled : null
                }`}
                id="green"
                disabled={buttonDisabled}
                onClick={onSetChip}
              >
                {betOnChipRender.filter(item => item.key === '0')}0
              </div>
              <div
                className={`${styles.redZone} ${
                  buttonDisabled ? styles.buttonDisabled : null
                }`}
                id="red"
                disabled={buttonDisabled}
                onClick={onSetChip}
              >
                {betOnChipRender.filter(item => item.key === '3')}3
              </div>
              <div
                className={`${styles.blackZone} ${
                  buttonDisabled ? styles.buttonDisabled : null
                }`}
                id="black"
                disabled={buttonDisabled}
                onClick={onSetChip}
              >
                {betOnChipRender.filter(item => item.key === '1')}1
              </div>
            </div>
            <div className={styles.groupZone}>
              <div
                className={`${styles.redZone} ${
                  buttonDisabled ? styles.buttonDisabled : null
                }`}
                id="red"
                disabled={buttonDisabled}
                onClick={onSetChip}
              >
                {betOnChipRender.filter(item => item.key === '4')}4
              </div>
              <div
                className={`${styles.blackZone} ${
                  buttonDisabled ? styles.buttonDisabled : null
                }`}
                id="black"
                disabled={buttonDisabled}
                onClick={onSetChip}
              >
                {betOnChipRender.filter(item => item.key === '6')}6
              </div>
              <div
                className={`${styles.redZone} ${
                  buttonDisabled ? styles.buttonDisabled : null
                }`}
                id="red"
                disabled={buttonDisabled}
                onClick={onSetChip}
              >
                {betOnChipRender.filter(item => item.key === '8')}8
              </div>
            </div>
            <div className={styles.groupZone}>
              <div
                className={`${styles.blackZone} ${
                  buttonDisabled ? styles.buttonDisabled : null
                }`}
                id="black"
                disabled={buttonDisabled}
                onClick={onSetChip}
              >
                {betOnChipRender.filter(item => item.key === '2')}2
              </div>
              <div
                className={`${styles.redZone} ${
                  buttonDisabled ? styles.buttonDisabled : null
                }`}
                id="red"
                disabled={buttonDisabled}
                onClick={onSetChip}
              >
                {betOnChipRender.filter(item => item.key === '7')}7
              </div>
              <div
                className={`${styles.blackZone} ${
                  buttonDisabled ? styles.buttonDisabled : null
                }`}
                id="black"
                disabled={buttonDisabled}
                onClick={onSetChip}
              >
                {betOnChipRender.filter(item => item.key === '5')}5
              </div>
            </div>
            <div className={styles.groupZone}>
              <div
                className={`${styles.allBlackZone} ${
                  buttonDisabled ? styles.buttonDisabled : null
                }`}
                id="black"
                disabled={buttonDisabled}
                onClick={onSetChip}
              >
                {betOnChipRender.filter(item => item.key === 'AB')}
                AB
              </div>
              <div
                className={`${styles.allRedZone} ${
                  buttonDisabled ? styles.buttonDisabled : null
                }`}
                id="red"
                disabled={buttonDisabled}
                onClick={onSetChip}
              >
                {betOnChipRender.filter(item => item.key === 'AR')}
                AR
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className={`${styles.startGame} ${
          buttonDisabled ? styles.buttonDisabled : null
        }`}
        disabled={buttonDisabled}
        onClick={clearChip}
      >
        CLEAR CHIP ZONE
      </button>
      <div className={styles.containerLimit}>
        <div className={styles.groupZoneLimit}>
          <h2>Limits 'AR' and 'AB' bet</h2>
          <div className={styles.colors}>max 100 credits</div>
        </div>
        <div className={styles.groupZoneLimit}>
          <h2>Limits numbers bet</h2>
          <div className={styles.numbers}>max 20 credits</div>
        </div>
      </div>

      <div className={styles.container}>
        <button
          className={`${styles.autoStart} ${
            buttonDisabled ? styles.buttonDisabled : null
          }`}
          disabled={buttonDisabled}
          onClick={() => setAutoStart(true)}
        >
          Start Auto Spin
        </button>
        <div className={`${styles.container} ${styles.timer}`}>
          SPIN VIA: {timer} seconds
        </div>
        <button
          className={`${styles.autoStart} ${
            buttonDisabled ? styles.buttonDisabled : null
          }`}
          disabled={buttonDisabled}
          onClick={() => setAutoStart(false)}
        >
          Stop Auto Spin
        </button>
      </div>
    </div>
  );
}
