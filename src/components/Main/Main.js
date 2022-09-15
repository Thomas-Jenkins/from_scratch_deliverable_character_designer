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

  const handleIncrement = () => {

  };
  return (
    <main>
      <>
        <Controls {...{ headImg, setHeadImg, middleImg, setMiddleImg, bottomImg, setBottomImg, headChange, setHeadChange }} />
        <Display {...{ headImg, middleImg, bottomImg }} />
        <Stats {...{ headChange }}/>
      </>
    </main>

  );
}