import { useEffect, useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { Card } from './card/Card';
import { makeStyles } from '@material-ui/core';
import CSS from 'csstype';
// icon
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import CardContainer from './components/CardContainer';

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
      const front: HTMLElement | null = document.querySelector(
        `.card${cardIndex - 1}.front`
      );
      const back: HTMLElement | null = document.querySelector(
        `.card${cardIndex - 1}.back`
      );
      front?.setAttribute('style', `z-index:${-cardIndex + 1}`);
      back?.setAttribute('style', `z-index:${-cardIndex + 1}`);

      front?.classList.remove('f-slide-right');
      back?.classList.remove('b-slide-right');
      setTimeout(() => {
        front?.classList.remove('f-slide-left');
        front?.classList.add('f-slide-left');
        back?.classList.remove('b-slide-left');
        back?.classList.add('b-slide-left');
      }, 50);
      setCount(count - 1);
      setCardIndex(cardIndex - 1);
    }
  };
  // Go to next card
  const nextOnClick = () => {
    if (cardIndex < 53) {
      const front: HTMLElement | null = document.querySelector(
        `.card${cardIndex}.front`
      );
      const back: HTMLElement | null = document.querySelector(
        `.card${cardIndex}.back`
      );
      front?.setAttribute('style', `z-index:${cardIndex}`);
      back?.setAttribute('style', `z-index:${cardIndex}`);

      front?.classList.remove('f-slide-left');
      back?.classList.remove('b-slide-left');
      setTimeout(() => {
        front?.classList.remove('f-slide-right');
        front?.classList.add('f-slide-right');
        back?.classList.remove('b-slide-right');
        back?.classList.add('b-slide-right');
      }, 50);
      setCount(count + 1);
      setCardIndex(cardIndex + 1);
    }
  };

  // shuffle card by reloading
  const shuffle = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <CardContainer cardSet={cardSet} />

      <div className="counter">
        <h2>{count}/54</h2>
      </div>
      <div className="button-container">
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
      </div>
    </div>
  );
};

export default App;
