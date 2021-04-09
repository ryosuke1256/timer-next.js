import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Button from '../lv1/Button';
import TimeCount from '../lv1/TimeCount';
import Text from '../lv1/Text';

const Timer: React.VFC = () => {
  const [word, setWord] = useState('');
  const [countStart, setCountStart] = useState(false);
  const [slctSec, setSlctSec] = useState<number>(0);
  const [slctMin, setSlctMin] = useState<number>(0);
  const [selectTimer, setSelectTimer] = useState<number>(0);
  const [timerChange, setTimerChange] = useState<boolean>(false);
  let something = 1;

  const log = (sec, min) => {
    console.log('log');
    if (sec < 60) {
      setWord(`${sec}秒経過しました`);
    } else if (min < 60) {
      setWord(`${min}分経過しました`);
    }
    sound('sign', 1);
  };

  const click = (setTime: number) => {
    if (countStart === true) {
      something++;
    }
    setCountStart(true);
    console.log('click');
    const sec = setTime / 1000;
    const min = setTime / 60000;
    if (sec < 60) {
      setSlctSec(sec);
    } else if (min < 60) {
      setSlctSec(0);
      setSlctMin(min);
    }
    console.log(setTime);
    setTimeout(() => log(sec, min), setTime);
  };

  const sound = (type, sec) => {
    console.log('soundが鳴りました');
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    osc.type = type;
    osc.connect(ctx.destination);
    osc.start();
    osc.stop(sec);
  };

  return (
    <>
      <Button
        timerChange={timerChange}
        setTimerChange={setTimerChange}
        setSelectTimer={setSelectTimer}
        click={click}
        time={'3秒'}
        setTime={3000}
      />
      <Button
        timerChange={timerChange}
        setTimerChange={setTimerChange}
        setSelectTimer={setSelectTimer}
        click={click}
        time={'10分'}
        setTime={600000}
      />
      <Button
        timerChange={timerChange}
        setTimerChange={setTimerChange}
        setSelectTimer={setSelectTimer}
        click={click}
        time={'50分'}
        setTime={3000000}
      />
      <TimeCount
        setTimerChange={setTimerChange}
        timerChange={timerChange}
        selectTimer={selectTimer}
        countStart={countStart}
        slctSec={slctSec}
        slctMin={slctMin}
      />
      {/* <NewTimeCount countStart={countStart} slctSec={slctSec} slctMin={slctMin} /> */}
      <Text Text={word} Style={Style} />
    </>
  );
};

export default Timer;

const Style = styled.div`
  font-size: 3rem;
  color: #e5e5e5;
`;
