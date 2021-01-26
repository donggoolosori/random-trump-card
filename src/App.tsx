import { useEffect, useState } from 'react';
import './App.css';
import { Card } from './card/Card';
import Buttons from './components/Buttons';
import CardContainer from './components/CardContainer';
import Counter from './components/Counter';

const App = () => {
  const [cardSet, setCardSet] = useState(['J1']);
  const [cardIndex, setCardIndex] = useState(0);
  const [count, setCount] = useState(0);

  // Set cardset at the first load
  useEffect(() => {
    setCardSet(new Card().card);
  }, []);

  return (
    <div className="App">
      <CardContainer cardSet={cardSet} />
      <Counter count={count} />
      <Buttons
        count={count}
        cardIndex={cardIndex}
        setCardIndex={setCardIndex}
        setCount={setCount}
      />
    </div>
  );
};

export default App;
