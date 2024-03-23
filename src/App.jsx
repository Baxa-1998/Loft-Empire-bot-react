import React, { useState } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;
function App() {
  React.useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };
  return (
    <>
      <h2>work</h2>
      <button onClick={onClose}>Закрыть</button>
    </>
  );
}

export default App;
