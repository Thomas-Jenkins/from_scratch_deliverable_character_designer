import React from 'react';
import { useState } from 'react';

import Controls from '../Controls/Controls';
import Display from '../Display/Display';

import './Main.css';

export default function Main() {
  const [headImg, setHeadImg] = useState('bird-head');
  const [middleImg, setMiddleImg] = useState('blue-middle');
  const [bottomImg, setBottomImg] = useState('blue-pants');
  const [headChange, setHeadChange] = useState(0);
  const [middleChange, setMiddleChange] = useState(0);
  const [bottomChange, setBottomChange] = useState(0);
  const [catchphrase, addCatchphrase] = useState([]);
  const [currentCatchphrase, setCurrentCatchphrase] = useState('');

  const handleHeadIncrement = () => {
    setHeadChange((prevState) => prevState + 1);
  };
  const handleMiddleIncrement = () => {
    setMiddleChange((prevState) => prevState + 1);
  };
  const handleBottomIncrement = () => {
    setBottomChange((prevState) => prevState + 1);
  };
  
  return (
    <main>
      <>               
        <Controls headImg={headImg} setHeadImg={setHeadImg} middleImg={middleImg} setMiddleImg={setMiddleImg} bottomImg={bottomImg} setBottomImg={setBottomImg} headChange={headChange} handleHeadIncrement={handleHeadIncrement} middleChange={middleChange} bottomChange={bottomChange} handleMiddleIncrement={handleMiddleIncrement} handleBottomIncrement={handleBottomIncrement} catchphrase={catchphrase} addCatchphrase={addCatchphrase} currentCatchphrase={currentCatchphrase} setCurrentCatchphrase={setCurrentCatchphrase} />
        <Display headImg={headImg} middleImg={middleImg} bottomImg={bottomImg} />
        
      </>
    </main>

  );
}