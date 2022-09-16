import React from 'react';

export default function Stats({ headChange, middleChange, bottomChange }) {
  return (
    <div className="stats-dis">
      <p name="statsDisplay">You have changed the head <span>{`${headChange}`}</span> times, the middle <span>{`${middleChange}`}</span> times, and the bottom <span>{`${bottomChange}`}</span> times. And Who could forget your characters timeless catchphrases: Enter Catchphrase here</p>
    </div>
  );
}