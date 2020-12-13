import logo from './logo.svg';
import './App.css';
import { StoreContext } from './utils/store';
import { useContext } from 'react';

function App() {
  const { item } = useContext(StoreContext);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Item Title: {item}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
