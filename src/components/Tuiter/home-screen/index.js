import React from "react";
import NavigationSidebar from "../navigation-sidebar/index.js";
import PostSummaryList from "../post-summary-list/index.js";
import TuitList from "../tuit-list/index.js";
import HomeComponent from "./home-component.js";
import WhatsHappening from "./whats-happening.js";

const HomeScreen = () => {
  return (
    <>
      <div className="list-group">
        <WhatsHappening />
        <TuitList />
      </div>
    </>
  );
};
export default HomeScreen;
