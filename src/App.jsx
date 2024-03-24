import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
const tg = window.Telegram.WebApp;
function App() {
  React.useEffect(() => {
    tg.ready();
  }, []);

  return (
    <>
    <Header/>
      <h2>work</h2>
    </>
  );
}

export default App;
