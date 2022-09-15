import React from 'react';
import { useState } from 'react';

import Controls from '../Controls/Controls';
import Display from '../Display/Display';
import Stats from '../Stats/Stats';

export default function Main() {
  const [headImg, setHeadImg] = useState('bird-head');
  const [middleImg, setMiddleImg] = useState('blue-middle');
  return (
    <main>
      <>
        <Controls {...{ headImg, setHeadImg, middleImg, setMiddleImg }} />
        <Display {...{ headImg, middleImg }} />
        <Stats />
      </>
    </main>

  );
}