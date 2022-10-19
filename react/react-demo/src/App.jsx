import logo from './logo.svg'
import './App.css'
import MyComponent from './Components/Props/MyComponent'
import Form from './Components/States/Form'
import Counter from './Components/States/Counter'
import Converter from './Components/States/Converter'
import LoginControl from './Components/Props/LoginControl'
import Game from './Components/States/Game'
import EmployeeInfo from './Request'
import FilmRequest from './Components/FilmRequest'
import FilmDisplay from './Components/FilmDisplay'
import ProductManager from './Components/States/ProductManager'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Router>
        <Link to="/home">
        <button type="button">Home</button>
        </Link>
        <Link to="/users">
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
        <Routes>
          <Route path="/home" element={<MyComponent/>}/>
          <Route path="/users/:id" element={<EmployeeInfo/>}/>
          <Route path="/contact" element={<FilmDisplay/>}/>
          <Route path="/404" element={<LoginControl/>}/>
          <Route path="/home" element={<MyComponent/>}/>
          <Route path="/counter" element={<Counter/>}/>
          <Route path="/productmanager" element={<ProductManager/>}/>
          <Route path="/filmrequest" element={<FilmRequest/>}/>
          <Route path="/game" element={<Game/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/converter" element={<Converter/>}/>
        </Routes>
      </Router>
        <div>
        </div>
      </header>
    </div>
  )
}

export default App
