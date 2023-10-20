import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);

  const reverseLogo = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse((prevReverse) => !prevReverse);
    setCounter((prevCounter) => prevCounter + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseLogo}`} alt="logo" />

        <button onClick={handleClick}>
          Reverse
        </button>

        <h2>Contador: {counter}</h2>
      </header>
    </div>
  );
}

export default App;
