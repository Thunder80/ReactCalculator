import React from 'react';
import './App.css';
import Button from './Button';
import Iofield from './Iofield';
import ScreenContextProvider from './context/ScreenContextProvider'

const App = () => {

  return (
    <div className="container">
      <h1>My Calculator</h1>
      <ScreenContextProvider>
        <Iofield className="screen"></Iofield>
        <div className="dialpad1">
          <Button value="1"></Button>
          <Button value="2"></Button>
          <Button value="3"></Button>
          <Button value="+"></Button>
        </div>
        <div className="dialpad2">
          <Button value="4"></Button>
          <Button value="5"></Button>
          <Button value="6"></Button>
          <Button value="-"></Button>
        </div>
        <div className="dialpad3">
          <Button value="7"></Button>
          <Button value="8"></Button>
          <Button value="9"></Button>
          <Button value="*"></Button>
        </div>
        <div className="dialpad3">
          <Button value="%"></Button>
          <Button value="0"></Button>
          <Button value="="></Button>
          <Button value="/"></Button>
        </div>
      </ScreenContextProvider>
    </div>
  );
}

export default App;
