import About from "./pages/About"
import './App.css';
import TodoContainer from './components/TodoContainer';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path="/" element={<TodoContainer />}></Route>
      <Route path="/about" element={<About />}></Route>
   </Routes>
    </div>
  );
}

export default App;
