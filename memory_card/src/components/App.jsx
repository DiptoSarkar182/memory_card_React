import { useState } from 'react'
import  {images}  from './data'


export default function App() {
  return (
    <div>
      <div className='headerAndScore'>
      <p className='headerName'>Memory Game</p>
      <div className='countScore'>
        <p className='currentScore'>Current Score:</p>
        <p className='bestScore'>Best Score:</p>
      </div>
    </div>
    {images.map(image => (
        <div key={image.id}>
          <h2>{image.name}</h2>
          <img
            src={image.src}
            alt={image.name}
            style={{ maxWidth: '200px', maxHeight: '200px' }}
          />
        </div>
      ))}
    </div>
      
  )
}

