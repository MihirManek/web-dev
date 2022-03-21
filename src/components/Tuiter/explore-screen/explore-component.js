import React from "react";
import PostSummaryList from "../post-summary-list";
import "./ExploreComponent.css";

const ExploreComponent = () => {
  return (
    <>
      <div className="wd-section-container wd-search-container mb-3">
        <form action="">
          <div className="wd-search d-flex justify-content-between align-items-center">
            <div className="form-group w-100 me-4">
              <i className="fa fa-search form-control-icon"></i>
              <input
                type="text"
                className="form-control search-box"
                placeholder="Search"
              />
            </div>
            <a
              href="explore-settings.html"
              className="search-action d-flex justify-content-between align-items-center"
            >
              <i className="fa fa-cog"></i>
            </a>
          </div>
        </form>
      </div>
      <div className="wd-section-container wd-tab-container mb-3">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="for-you.html"
            >
              For you
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="trending.html">
              Trending
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="news.html">
              News
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="sports.html">
              Sports
            </a>
          </li>
          <li className="nav-item d-none d-md-block">
            <a className="nav-link" href="entertainment.html">
              Entertainment
            </a>
          </li>
        </ul>
      </div>
      <div className="wd-section-container">
        <div className="container-fluid p-0 showcase-header">
          <div className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"
                  alt="starship"
                  className="img-fluid showcase-image d-block w-100"
                />

                <p className="h2 carousel-caption">SpaceX's Starship</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {<PostSummaryList />}
    </>
  );
};
export default ExploreComponent;
