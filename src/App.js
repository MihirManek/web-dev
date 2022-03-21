import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/Tuiter/home-screen";
import ExploreScreen from "./components/Tuiter/explore-screen";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/hello" element={<HelloWorld />} exact={true} />
          <Route path="/" element={<Labs />} exact={true} />
          <Route path="/labs" element={<Labs />} exact={true} />
          <Route path="/tuiter" element={<HomeScreen />} exact={true} />
          <Route path="/tuiter/home" element={<HomeScreen />} exact={true} />
          <Route
            path="/tuiter/explore"
            element={<ExploreScreen />}
            exact={true}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
