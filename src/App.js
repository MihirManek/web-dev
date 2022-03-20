import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/hello" element={<HelloWorld />} exact={true} />
          <Route path="/" element={<Labs />} exact={true} />
          <Route path="/labs" element={<Labs />} exact={true} />
          <Route path="/tuiter" element={<Tuiter />} exact={true} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
