import './App.css';
import { Card } from './card/Card';

const App = () => {
  let { card } = new Card();
  card.sort(() => Math.random() - 0.5);
  console.log(card);
  return (
    <div className="App">
      <img src="/image/10C.jpg" alt="" />
    </div>
  );
};

export default App;
