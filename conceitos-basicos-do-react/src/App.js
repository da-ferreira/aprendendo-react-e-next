import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  // componentDidUpdate -> executa toda vez que o componente atualiza
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  // componentDidMount -> executa uma vez quando o componente é montado
  useEffect(() => {
    console.log('componentDidMount');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Click</button>

        <h2>Contador: {counter}</h2>
      </header>
    </div>
  );
}

export default App;
