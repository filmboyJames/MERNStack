import logo from './logo.svg';
import './App.css';
import Person from './Person';
import MyComponent from './Components/Props/MyComponent';
import Products from './Components/Props/Products';
import Parent from './Components/Props/Parent';
import PropComp from './Components/Props/Hello';
import MilesAhead from './Components/States/MilesAhead';
import Form from './Components/States/Form';
import TrueFalse from './Components/States/TrueFalse'
import Counter from './Components/States/Counter'

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
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
        </p> */}
        <div>
        <Counter/>
        <TrueFalse/>
        {/* <Form/> */}
        <MilesAhead/>
          <Person/>
          <MyComponent/>
          <Products
          name="Pepsi"
          price={1.50}
          description="another drink"/>
          <Parent/>
          <PropComp/>
          <MyComponent/>
          
        </div>
        {/* <a
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
        </a> */}
      </header>
    </div>
  );
}

export default App;
