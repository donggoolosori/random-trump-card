import './App.css';
import { Card } from './card/Card';

const App = () => {
  const card = new Card();
  console.log(card.card);
  return <div className="App"></div>;
};

export default App;
