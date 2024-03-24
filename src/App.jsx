import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { useTelegram } from './Hooks/useTelegram';

function App() {
  const { onToggleButton, tg } = useTelegram();

  React.useEffect(() => {
    tg.ready();
  }, []);

  return (
    <>
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </>
  );
}

export default App;
