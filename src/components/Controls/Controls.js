import React from 'react';
import Stats from '../Stats/Stats';
import './Controls.css';

export default function Controls({ 
  headImg, 
  setHeadImg, 
  middleImg,

  setMiddleImg, 
  bottomImg, 
  setBottomImg,

  handleHeadIncrement, 
  handleMiddleIncrement, 
  handleBottomIncrement,

  addCatchphrase, 
  currentCatchphrase, 
  setCurrentCatchphrase,

  headChange, 
  middleChange, 
  bottomChange, 
  catchphrase 
}) {
  
  const handleAddCatchphrase = () => {
    addCatchphrase((prevCatchphrases) => [...prevCatchphrases, currentCatchphrase]);
  };

  

  return (
    <>
      <div className="controls">
        <div className="top-input">
          <select name="top" value={ headImg } onChange={(e) => { setHeadImg(e.target.value); handleHeadIncrement(); }}>
            <option value="bird-head">Head One</option>
            <option value="dog-head">Head Two</option>
            <option value="horse-head">Head Three</option>
          </select>
          <label>Head</label>
        </div>
        <div className="middle-input">
          <select name="middle" value={middleImg} onChange={(e) => { setMiddleImg(e.target.value); handleMiddleIncrement(); }}>
            <option value="blue-middle">Middle One</option>
            <option value="pink-middle">Middle Two</option>
            <option value="red-middle">Middle Three</option>
          </select>
          <label>Shirt</label>
        </div>
        <div className="bottom-input">
          <select name="bottom" value={bottomImg} onChange={(e) => { setBottomImg(e.target.value); handleBottomIncrement(); }}>
            <option value="blue-pants">Bottom One</option>
            <option value="leg-pants">Bottom Two</option>
            <option value="white-pants">Bottom Three</option>
          </select>
          <label>Bottom</label>
        </div>
        <div className="catchphrase-input">
          <input name="catchphrase" value={currentCatchphrase} onChange={(e) => {
            setCurrentCatchphrase(e.target.value);
          }} >
          </input>
          <button name="catchphrase-button" onClick={handleAddCatchphrase}>Add Catchphrase</button>
          {/* <label>Catchphrase</label> */}
        </div>
        <Stats headChange={headChange} middleChange={middleChange} bottomChange={bottomChange} catchphrase={catchphrase} />
      </div>
    </>
  );
}