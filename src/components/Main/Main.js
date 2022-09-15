import React from 'react';
import { useState } from 'react';

import Controls from '../Controls/Controls';
import Display from '../Display/Display';
import Stats from '../Stats/Stats';

export default function Main() {
  const [headImg, setHeadImg] = useState('bird-head');
  return (
    <main>
      <>
        <Controls {...{ headImg, setHeadImg }} />
        <Display {...{ headImg }} />
        <Stats />
      </>
    </main>

  );
}