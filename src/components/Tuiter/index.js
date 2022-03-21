import React from "react";
import { Link } from "react-router-dom";
import ExploreScreen from "./explore-screen";
import ExploreComponent from "./explore-screen/explore-component";
import HomeScreen from "./home-screen";
import NavigationSidebar from "./navigation-sidebar";
import PostList from "./post-summary-list";
import PostSummaryItem from "./post-summary-list/post-summary-item";
import WhoToFollowList from "./who-to-follow-list";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";

const Tuiter = () => {
  return (
    <>
      <HomeScreen />
    </>
  );
};

export default Tuiter;
