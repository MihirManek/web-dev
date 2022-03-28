import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/Tuiter/home-screen";
import ExploreScreen from "./components/Tuiter/explore-screen";
import React from "react";
import ProfileScreen from "components/Tuiter/profile-screen";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/">
            <Route index element={<Labs />} />
            <Route path="labs" element={<Labs />} />
            <Route path="hello" element={<HelloWorld />} />
            <Route path="tuiter" element={<Tuiter />}>
              <Route index element={<HomeScreen />} />
              <Route path="home" element={<HomeScreen />} />
              <Route path="explore" element={<ExploreScreen />} />
              <Route
                path="profile"
                element={<ProfileScreen editMode={false} />}
              />
              <Route
                path="profile/edit"
                element={<ProfileScreen editMode={true} />}
              />
              {/* <Route path="notifications" element={<NotificationScreen />} /> */}
              {/* ... */}
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
