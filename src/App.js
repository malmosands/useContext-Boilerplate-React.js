import logo from './logo.svg';
import './App.css';
import { StoreContext } from './utils/store';
import { useContext } from 'react';

function App() {
  const { item, setItem } = useContext(StoreContext);

  const submit = (event) => {
    event.preventDefault();
    setItem(event.target.title.value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Item Title: {item}
        </p>
        <form onSubmit={submit}>
          <input type="text" name="title" placeholder="Update Item Title" />
        </form>
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
