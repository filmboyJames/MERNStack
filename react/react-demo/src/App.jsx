import {
  BrowserRouter as Router, Link, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Form from './Components/States/Form';
import Counter from './Components/States/Counter';
import Converter from './Components/States/Converter';
import LoginControl from './Components/Props/LoginControl';
import Game from './Components/States/Game';
import UserParams from './Components/Props/UserParams';
import FilmRequest from './Components/OMDB Profile/FilmRequest';
import FilmDisplay from './Components/OMDB Profile/FilmDisplay';
import FilmDetails from './Components/OMDB Profile/FilmDetails';
import ProductManager from './Components/States/Product Manager/ProductManager';
import Navigation from './Components/Props/Navigation';
import Hello from './Components/Props/Hello';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navigation />
          <Link to="/OMDB">
            <button type="button">OMDB</button>
          </Link>
          <Link to="/home">
            <button type="button">Home</button>
          </Link>
          <Link to="/users/:id">
            <button type="button">Users</button>
          </Link>
          <Link to="/contact">
            <button type="button">Contact</button>
          </Link>
          <Link to="/404">
            <button type="button">404</button>
          </Link>
          <Link to="/counter">
            <button type="button">Counter</button>
          </Link>
          <Link to="/productmanager">
            <button type="button">Product Manager</button>
          </Link>
          <Link to="/filmrequest">
            <button type="button">Film Request</button>
          </Link>
          <Link to="/game">
            <button type="button">Game</button>
          </Link>
          <h2>CONTENT:</h2>
          <Routes>
            <Route path="/home" element={<Hello name="James" />} />
            <Route path="/users/:id" element={<UserParams />} />
            <Route path="/contact" element={<FilmDisplay />} />
            <Route path="/404" element={<LoginControl />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/productmanager" element={<ProductManager />} />
            <Route path="/filmrequest" element={<FilmRequest />} />
            <Route path="/game" element={<Game />} />
            <Route path="/form" element={<Form />} />
            <Route path="/converter" element={<Converter />} />
            <Route path="/OMDB" element={<FilmDisplay />} />
            <Route path="/details/:imdbID" element={<FilmDetails />} />
          </Routes>
        </Router>
        <div />
      </header>
    </div>
  );
}

export default App;
