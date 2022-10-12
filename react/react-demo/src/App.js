import logo from './logo.svg';
import './App.css';

const SomeApp = () => {

  const address = {
      forename: "James",
      surname: "Stewart",
      line1: "Nationwide",
      line2: "The Shed",
      city: "Edinburgh"
  }

  return (
      <div>
          <h1>{address.forename}</h1>
          <h1>{address.surname}</h1>
          <h1>{address.line1}</h1>
          <h1>{address.line2}</h1>
          <h1>{address.city}</h1>
          <h1>{address.zip}</h1>
      </div>
  );
};
//export default SomeApp;

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. If you really want to.
        </p>
        <ol>
          <li>
            I'm making a list
          </li>
          <li>
            I'm checking it twice
          </li>
        </ol>
        <p>
          I'm writing some words to appear on a page
        </p>
        <p>
          {SomeApp()};
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link"
          href="https:google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to Google
        </a>
      </header>
    </div>
  );
}

export default App;
