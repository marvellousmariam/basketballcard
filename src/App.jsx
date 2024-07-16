import React from 'react';
import BasketballPlayerCard from './components/BasketballPlayerCard';
import { players } from './export';
import './App.css'

const App = () => {
 
  return (
  <div>
    <h1 className='title'>Basketball Players</h1>
    <div className='container'>
    
    {players.map((player, index) => (
      <BasketballPlayerCard key={index} {...player} />
    ))}
  </div>
  </div>
  );
};

export default App;