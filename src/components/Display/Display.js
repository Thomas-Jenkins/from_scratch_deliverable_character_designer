import React from 'react';

import './Display.css';

export default function Display({ headImg }) {
  return (
    <div className="display-el">
      <div name="head-dis">
        <img alt={headImg} src={`${process.env.PUBLIC_URL}/assets/${headImg}.png`}/>
      </div>
      <div name="middle-dis">
        <img/>
      </div>
      <div name="bottom-dis">
        <img/>
      </div>
    </div>
  );
}

