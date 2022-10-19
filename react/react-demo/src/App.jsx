import logo from './logo.svg'
import './App.css'
import Person from './Components/Props/Person'
import Person1 from './Components/Props/Person1'
import MyComponent from './Components/Props/MyComponent'
import Products from './Components/Props/Products'
import Parent from './Components/Props/Parent'
import PropComp from './Components/Props/Hello'
import MilesAhead from './Components/States/MilesAhead'
import Form from './Components/States/Form'
import TrueFalse from './Components/States/TrueFalse'
import Counter from './Components/States/Counter'
import Converter from './Components/States/Converter'
import people from './people.json' // Needs files ending!
import Content from './Components/Props/Content'
import Subcontent from './Components/Props/Subcontent'
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
        <Link to="/counter">
        <button type="button">Counter</button>
        </Link>
        <Routes>
          <Route path="/home" element={<MyComponent/>}/>
          <Route path="/counter" element={<Counter/>}/>
        </Routes>
      </Router>
        <div>
          <ProductManager/>
          <FilmDisplay />
          <br />
          <br />
          <br />
          <FilmRequest />
          <EmployeeInfo />
          <Game/>
          <Counter />
          <LoginControl/>
          <Subcontent/>
          <Content/>
          <Form />
          {
            people.map(person => {
              return <Person1 key={person.name + person.age} name={person.name} age={person.age} job={person.job} />
            })
          }
          <Converter />
          <TrueFalse />
          <Form />
          <MilesAhead />
          <Person />
          <MyComponent />
          <Products
            name="Pepsi"
            price={1.50}
            description="another drink" />
          <Parent />
          <PropComp />
          <MyComponent />

        </div>
      </header>
    </div>
  )
}

export default App
