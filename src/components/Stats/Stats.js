import React from 'react';

export default function Stats({ headChange }) {
  return (
    <div className="stats-dis">
      <p name="statsDisplay">You have changed the head <span>{`${headChange}`}</span> times, the middle 0 times, and the bottom 0 times. And Who could forget your characters timeless catchphrases: Enter Catchphrase here</p>
    </div>
  );
}