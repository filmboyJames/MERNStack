import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button, Row, Col, Container,
} from 'react-bootstrap';
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
          <Container>
            <Col>
              <Link to="/home">
                <Button>Home</Button>
              </Link>
              <Link to="/users/:id">
                <Button>Users</Button>
              </Link>
              <Link to="/contact">
                <Button>Contact</Button>
              </Link>
              <Link to="/404">
                <Button>404</Button>
              </Link>
            </Col>

            <Link to="/counter">
              <Button>Counter</Button>
            </Link>
            <Link to="/productmanager">
              <Button>Product Manager</Button>
            </Link>
            <Link to="/filmrequest">
              <Button>Film Request</Button>
            </Link>
            <Link to="/game">
              <Button>Game</Button>
            </Link>
            <Row>
              <Col>

                <Link to="/OMDB">
                  <Button>OMDB</Button>
                </Link>
              </Col>
            </Row>
          </Container>
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
