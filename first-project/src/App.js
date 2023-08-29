import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// 👉 Componente de classe
class App extends Component {
  constructor(props) {
    super(props);

    // 👉 Falando para o React que o this.handlePClick sempre será o this da classe App (FORMA MAIS LONGA)
    this.handlePClick = this.handlePClick.bind(this);

    this.state = {
      name: 'David Ferreira',
      counter: 0
    };
  }

  handlePClick() {
    this.setState({ name: 'David' });
  }

  // 👉 (FORMA MAIS CURTA). Usando arrow function, ela não cria um novo this, ela herda o this do escopo anterior
  handleAClick = (event) => {
    event.preventDefault();

    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  render() {
    const { name, counter } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            Olá, {name}!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            onClick={this.handleAClick}
          >
            Documentação do React {counter}
          </a>
        </header>
      </div>
    );
  }
}

// 👉 Componente de função

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
