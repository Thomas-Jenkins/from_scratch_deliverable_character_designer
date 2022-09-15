import React from 'react';

import './Display.css';

export default function Display({ headImg, middleImg }) {
  return (
    <div className="display-el">
      <div name="head-dis">
        <img alt={headImg} src={`${process.env.PUBLIC_URL}/assets/${headImg}.png`}/>
      </div>
      <div name="middle-dis">
        <img alt={middleImg} src ={`${process.env.PUBLIC_URL}/assets/${middleImg}.png`}/>
      </div>
      <div name="bottom-dis">
        <img/>
      </div>
    </div>
  );
}

