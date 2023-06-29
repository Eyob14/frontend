import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Create from "./Create";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
