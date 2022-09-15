import React from 'react';

export default function Controls({ headImg, setHeadImg, middleImg, setMiddleImg }) {
  return (
    <div className="controls">
      <div className="top-input">
        <select name="top" value={headImg} onChange={(e) => setHeadImg(e.target.value)}>
          <option value="bird-head">Head One</option>
          <option value="dog-head">Head Two</option>
          <option value="horse-head">Head Three</option>
        </select>
        <label>Head</label>
      </div>
      <div className="middle-input">
        <select name="middle" value={middleImg} onChange={(e) => setMiddleImg(e.target.value)}>
          <option value="blue-middle">Middle One</option>
          <option value="pink-middle">Middle Two</option>
          <option value="red-middle">Middle Three</option>
        </select>
        <label>Shirt</label>
      </div>
      <div className="bottom-input">
        <select name="bottom">
          <option value="bottomOne">Bottom One</option>
          <option value="bottomTwo">Bottom Two</option>
          <option value="bottomThree">Bottom Three</option>
        </select>
        <label>Bottom</label>
      </div>
      <div className="catchphrase-input">
        <input name="catchphrase">

        </input>
        <label>Catchphrase</label>
      </div>
    </div>
  );
}