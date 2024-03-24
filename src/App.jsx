import React, { useState } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;
function App() {
  React.useEffect(() => {
    tg.ready();
  }, []);

  return (
    <>
      <h2>work</h2>
    </>
  );
}

export default App;
