import React from 'react';

import Controls from '../Controls/Controls';
import Display from '../Display/Display';
import Stats from '../Stats/Stats';

export default function Main() {
  return (
    <main>
      <Controls />
      <Display />
      <Stats />
    </main>
  );
}