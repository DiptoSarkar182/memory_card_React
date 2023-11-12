import { useState } from 'react'
import { useEffect } from 'react';
import Game from './components/game';
import Header from './components/header';


export default function App() {
  return (
    <div>
      <Header></Header>
      <Game></Game>
    </div>
      
  )
}

