import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './card/Card';
// icon
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const App = () => {
  const [cardSet, setCardSet] = useState(['J1']);
  const [cardIndex, setCardIndex] = useState(0);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCardSet(new Card().card);
  }, []);

  const prevOnClick = () => {
    if (cardIndex > 0) {
      setCount(count - 1);
      setCardIndex(cardIndex - 1);
    }
  };

  const nextOnClick = () => {
    if (cardIndex < 53) {
      setCount(count + 1);
      setCardIndex(cardIndex + 1);
    }
  };

  const goFirst = () => {
    setCount(1);
    setCardIndex(0);
  };

  const goLast = () => {
    setCount(54);
    setCardIndex(53);
  };

  return (
    <div className="App">
      <div className="card-container">
        <img
          className="card-img"
          src={`/image/${cardSet[cardIndex]}.jpg`}
          alt="card"
        />
      </div>
      <div className="counter">
        <h2>{count}/54</h2>
      </div>
      <div className="button-container">
        <SkipPreviousIcon onClick={goFirst} />
        <ArrowBackIosIcon onClick={prevOnClick} />
        <ArrowForwardIosIcon onClick={nextOnClick} />
        <SkipNextIcon onClick={goLast} />
      </div>
    </div>
  );
};

export default App;
