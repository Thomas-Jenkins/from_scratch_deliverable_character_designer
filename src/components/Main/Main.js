import React from 'react';
import { useState } from 'react';

import Controls from '../Controls/Controls';
import Display from '../Display/Display';
import Stats from '../Stats/Stats';

export default function Main() {
  const [headImg, setHeadImg] = useState('bird-head');
  const [middleImg, setMiddleImg] = useState('blue-middle');
  const [bottomImg, setBottomImg] = useState('blue-pants');
  const [headChange, setHeadChange] = useState(0);
  const [middleChange, setMiddleChange] = useState(0);
  const [bottomChange, setBottomChange] = useState(0);

  const handleHeadIncrement = () => {
    setHeadChange((prevState) => prevState + 1);
  };
  const handleMiddleIncrement = () => {
    setMiddleChange((prevState) => prevState + 1);
  };
  const handleBottomIncrement = () => {
    setBottomChange((prevState) => prevState + 1);
  };
  return (
    <main>
      <>               
        <Controls headImg={headImg} setHeadImg={setHeadImg} middleImg={middleImg} setMiddleImg={setMiddleImg} bottomImg={bottomImg} setBottomImg={setBottomImg} headChange={headChange} handleHeadIncrement={handleHeadIncrement} middleChange={middleChange} handleMiddleIncrement={handleMiddleIncrement} handleBottomIncrement={handleBottomIncrement} />
        <Display {...{ headImg, middleImg, bottomImg }} />
        <Stats {...{ headChange, middleChange, bottomChange }}/>
      </>
    </main>

  );
}