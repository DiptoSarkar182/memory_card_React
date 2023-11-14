import { images } from "./data";
import { useState } from "react";
import { useEffect } from "react";

export default function Game() {
  const [totalImages, setTotalImages] = useState(images.length);
  const [uniqueRandomValues, setUniqueRandomValues] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedImageID, setClickedImageID] = useState("");
  const [storeClickedImageID, setStoreClickedImageID] = useState([]);

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

  useEffect(() => {
    generateRandomValues();
  }, [clickedImageID]);

  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  }, [currentScore]);

  useEffect(() => {
    if (bestScore === 30) {
      alert("You won the game!");
      setCurrentScore(0);
      setBestScore(0);
    }
  }, [currentScore]);


  function handleOnClick(getImageID) {
    if (getImageID !== undefined) {
      if (storeClickedImageID.includes(getImageID)) {
        setCurrentScore(0);
        setStoreClickedImageID([]);
      } else {
        setClickedImageID(getImageID);
        setStoreClickedImageID((prevArray) => [...prevArray, getImageID]);
        setCurrentScore((prevScore) => prevScore + 1);
      }
    }
    generateRandomValues();
  }

  return (
    <div className="parentContainer">
      <div className="score">
        <div className="current">Current Score: {currentScore}</div>
        <div className="best">Best Score: {bestScore}</div>
      </div>
      <div className="image-container">
        {uniqueRandomValues.map((value, index) => (
          <div key={index} className="image-wrapper">
            <button
              className="button"
              onClick={() => {
                handleOnClick(images[value].id);
              }}
            >
              <img
                src={images[value].src}
                alt={images[value].name}
                style={{ width: "200px", height: "300px" }}
              />
            </button>
            <p className="image-name">{images[value].name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
