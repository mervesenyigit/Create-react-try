import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Calculator from './components/Calculator';
import ToDoItem from './components/ToDoItem';
import BasicNotebook from './components/BasicNotebook';
import UseStateTryComponent from './components/useStateTryComponent';
import FavoriteBookList from './components/FavoriteBookList';
import BMICalcuator from './components/BMICalcuator';
import UserFetcher from './components/UserFetcher ';




function App() {
  return (
    <div className="App">
       <BasicNotebook />
       <UseStateTryComponent/>
       <FavoriteBookList />
       <BMICalcuator/>
       <UserFetcher/>
    
      <header className="App-header">
        {/* <nav>
          <ul className='nav-ul'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            
          </ul>
        </nav> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/todoitem" element={<ToDoItem />} />
          <Route path="/basicnotebook" element={<BasicNotebook />} />
        
        </Routes>
      </header>
    </div>
  );
}

export default App;
