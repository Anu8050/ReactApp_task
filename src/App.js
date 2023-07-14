import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Login from './Components/loginpage';
import Itempage from './Components/itempage';
import Header from './Components/Header/headerpage';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path ='/' Component={Welcome}></Route>
        <Route path ='/loginpage' Component={Login}></Route>
        <Route path ='/itempage' Component={Itempage}></Route>
        <Route path ='/headerpage' Component={Header}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
