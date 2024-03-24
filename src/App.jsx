import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { useTelegram } from './Hooks/useTelegram';
import { Route, Routes } from 'react-router-dom';
import ProductList from './Components/ProductList/ProductList';
import Form from './Components/Form/Form';

function App() {
  const { onToggleButton, tg } = useTelegram();

  React.useEffect(() => {
    tg.ready();
  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route index element={<ProductList />} />
        <Route path={"form"} element={<Form />} />
      </Routes>
      {/* <button onClick={onToggleButton}>toggle</button> */}
    </>
  );
}

export default App;
