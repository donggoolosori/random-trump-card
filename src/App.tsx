import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './card/Card';

const App = () => {
  const [cardSet, setCardSet] = useState(['J1']);
  const [cardIndex, setCardIndex] = useState(0);

  useEffect(() => {
    setCardSet(new Card().card);
  }, []);

  const prevOnClick = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
    }
  };

  const nextOnClick = () => {
    if (cardIndex < 53) {
      setCardIndex(cardIndex + 1);
    }
  };

  return (
    <div className="App">
      <div className="card-container">
        <img
          className="card-img"
          src={`/image/${cardSet[cardIndex]}.jpg`}
          alt="card"
        />
        <div className="button-container">
          <button className="prev" onClick={prevOnClick}>
            Previous
          </button>
          <button className="next" onClick={nextOnClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
