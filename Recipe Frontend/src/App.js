import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Component/Home";
import Addrecipe from './Component/Addrecipe';
function App() {
  return (
    <div className="App">
      <Home></Home>
      <Routes>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Addrecipe" element={<Addrecipe/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
