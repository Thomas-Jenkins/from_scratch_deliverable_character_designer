import React from 'react';
import './Stats.css';

export default function Stats({ headChange, middleChange, bottomChange, catchphrase }) {
  return (
    <div className="stats-dis">
      <p name="statsDisplay">You have changed the head <span>{`${headChange}`}</span> times, the middle <span>{`${middleChange}`}</span> times, and the bottom <span>{`${bottomChange}`}</span> times. <br></br> And who could forget your characters timeless catchphrases: {catchphrase.map((item) => (<li key={item}>{item}</li>))}</p>
    </div>
  );
}