import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import { makeStyles } from '@material-ui/core';
import './Buttons.css';

interface Props {
  cardIndex: number;
  count: number;
  setCount: (count: number) => void;
  setCardIndex: (cardIndex: number) => void;
}

const delay: number = 50;

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Buttons = ({ count, cardIndex, setCount, setCardIndex }: Props) => {
  const classes = useStyles();
  // Go to previous card
  const prevOnClick = () => {
    if (cardIndex > 0) {
      if (cardIndex >= 3) {
        const prevCard: NodeListOf<Element> | null = document.querySelectorAll(
          `.card${cardIndex - 3}`
        );
        prevCard.forEach((el) => el.classList.remove('hidden'));
      }
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
      }, delay);
      setCount(count - 1);
      setCardIndex(cardIndex - 1);
    }
  };
  // Go to next card
  const nextOnClick = () => {
    if (cardIndex < 54) {
      if (cardIndex >= 7) {
        const prevCard: NodeListOf<Element> | null = document.querySelectorAll(
          `.card${cardIndex - 7}`
        );
        prevCard.forEach((el) => el.classList.add('hidden'));
      }
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
      }, delay);
      setCount(count + 1);
      setCardIndex(cardIndex + 1);
    }
  };

  // shuffle card by reloading
  const shuffle = () => {
    window.location.reload();
  };

  return (
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
  );
};

export default Buttons;
