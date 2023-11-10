import './App.css';
import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    default:
      return state;
  }
};

function App() {
  const [data, dispatch] = useReducer(reducer, {
    loading: true,
    data: {},
  });

  return (
    <div className="App">
      <div>Hello</div>
    </div>
  );
}

export default App;
