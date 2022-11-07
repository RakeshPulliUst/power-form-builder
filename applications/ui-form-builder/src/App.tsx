import React from 'react';
import './App.css';
import {Button}  from '@power-form-builder/ui-components';
import {Header} from '@power-form-builder/ui-translation';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Hello UI-Form-Builder</h1>
      <Button textColor='blue'>Click From UI-Form-Builder, Button of UI-Component</Button>      
    </div>
  );
}

export default App;
