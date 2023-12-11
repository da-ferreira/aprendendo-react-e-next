import './App.css';
import { useReducer } from 'react';
import { Outlet } from 'react-router-dom';

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
      <h1
        style={{
          marginBottom: '50px',
        }}
      >
        Hello
      </h1>

      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
