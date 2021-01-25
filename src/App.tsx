import { useEffect, useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { Card } from './card/Card';
import { makeStyles } from '@material-ui/core';
import CSS from 'csstype';
// icon
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AutorenewIcon from '@material-ui/icons/Autorenew';

const backImg =
  'https://i.pinimg.com/564x/91/69/ef/9169ef73b3564976a7dc564d66861027.jpg';
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const App = () => {
  const [cardSet, setCardSet] = useState(['J1']);
  const [cardIndex, setCardIndex] = useState(0);
  const [count, setCount] = useState(1);
  const classes = useStyles();

  // Set cardset at the first load
  useEffect(() => {
    setCardSet(new Card().card);
  }, []);

  // Go to previous card
  const prevOnClick = () => {
    if (cardIndex > 0) {
      const currentCard: HTMLElement | null = document.querySelector(
        `.card${cardIndex - 1}`
      );
      currentCard?.setAttribute('style', `z-index:${-cardIndex + 1}`);
      setTimeout(() => {
        currentCard?.classList.remove('slide-left');
        currentCard?.classList.add('slide-left');
      }, 50);
      setCount(count - 1);
      setCardIndex(cardIndex - 1);
    }
  };
  // Go to next card
  const nextOnClick = () => {
    if (cardIndex < 53) {
      const currentCard: HTMLElement | null = document.querySelector(
        `.card${cardIndex}`
      );
      currentCard?.setAttribute('style', `z-index:${cardIndex}`);
      currentCard?.classList.remove('slide-left');
      setTimeout(() => {
        currentCard?.classList.remove('slide-right');
        currentCard?.classList.toggle('slide-right');
      }, 50);
      setCount(count + 1);
      setCardIndex(cardIndex + 1);
    }
  };

  // Go to a first card
  const goFirst = () => {
    setCount(1);
    setCardIndex(0);
  };
  // Go to a last card
  const goLast = () => {
    setCount(54);
    setCardIndex(53);
  };
  // shuffle card by reloading
  const shuffle = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="card-container">
        {cardSet.map((card, idx) => {
          const style: CSS.Properties = {
            zIndex: -idx,
          };
          return (
            <img
              key={idx}
              className={`card-img card${idx}`}
              src={`/image/${card}.jpg`}
              alt="card"
              style={style}
            />
          );
        })}
      </div>
      <div className="counter">
        <h2>{count}/54</h2>
      </div>
      <div className="button-container">
        <SkipPreviousIcon fontSize="large" onClick={goFirst} />
        <ArrowBackIosIcon fontSize="large" onClick={prevOnClick} />
        <Button
          variant="outlined"
          color="primary"
          size="large"
          className={classes.button}
          onClick={shuffle}
          startIcon={<AutorenewIcon />}
        >
          Shuffle
        </Button>
        <ArrowForwardIosIcon fontSize="large" onClick={nextOnClick} />
        <SkipNextIcon fontSize="large" onClick={goLast} />
      </div>
    </div>
  );
};

export default App;
