import { images } from "./data";
import { useState } from "react";
import { useEffect } from "react";
import '../styles/components.css'



export default function Game(){
    const [totalImages, setTotalImages] = useState(images.length);
    const [uniqueRandomValues, setUniqueRandomValues] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [clickedImageID, setClickedImageID] = useState('');
    const [storeClickedImageID, setStoreClickedImageID] = useState([]);

    useEffect(() => {
        const generateRandomValues = () => {
          const newValues = [];
          while (newValues.length < 10) {
            const randomValue = Math.floor(Math.random() * totalImages);
    
            if (!newValues.includes(randomValue)) {
              newValues.push(randomValue);
            }
          }
          setUniqueRandomValues(newValues);
        };
    
        generateRandomValues();
      }, [clickedImageID]);

      useEffect(() => {
        countScore();
      }, [storeClickedImageID]);

      useEffect(() => {
        if (currentScore > bestScore) {
            setBestScore(currentScore);
        }
    }, [currentScore]);
    

    function countScore(){
      if (storeClickedImageID.length === 0){
        setCurrentScore(currentScore + 0);
      }
     else if(!(storeClickedImageID.includes(clickedImageID))){
        setCurrentScore(currentScore + 1);
      }
    }

    function handleOnClick(getImageID){
      if (getImageID !== undefined) {
          setClickedImageID(getImageID);
          setStoreClickedImageID(prevArray => {
              const newArray = [...prevArray, getImageID];
              if (newArray.length === 1 || !newArray.slice(0, -1).includes(getImageID)) {
                  setCurrentScore(currentScore + 1);
              }
              return newArray;
          });
      }
  }

    return (
      <div>
        <div className="score">
          <div className='current'>Current Score: {currentScore}</div>
          <div className='best'>Best Score: {bestScore}</div>
        </div>
          <div className="image-container">
            {uniqueRandomValues.map((value, index) => (
                <div key={index}>
                    <button className="button"
                    onClick={() => {handleOnClick(images[value].id)}}>
                    <img
                        src={images[value].src}
                        alt={images[value].name}
                        style={{ width: '200px', height: '250px' }}
                    />
                    </button>
                    <p>{images[value].name}</p>
                </div>
            ))}
          </div>
      </div>
    )
}