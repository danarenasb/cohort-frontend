import './App.css';
import Navigation from './Navigation'
import Home from './Home'
import Students from './Students'
import Scores from './Scores'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/scores" element={<Scores />}/>
          <Route path="/students" element={<Students />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
