import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
      <div class="wd-section-container wd-search-container mb-3">
      <form action="">
        <div
          class="wd-search d-flex justify-content-between align-items-center"
        >
          <div class="form-group w-100 me-4">
            <i class="fa fa-search form-control-icon"></i>
            <input
              type="text"
              class="form-control search-box"
              placeholder="Search"
            />
          </div>
          <a
            href="explore-settings.html"
            class="search-action d-flex justify-content-between align-items-center"
            ><i class="fa fa-cog"></i
          ></a>
        </div>
      </form>
    </div>
    <div class="wd-section-container wd-tab-container mb-3">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a
            class="nav-link active"
            aria-current="page"
            href="for-you.html"
            >For you</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="news.html">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sports.html">Sports</a>
        </li>
        <li class="nav-item d-none d-md-block">
          <a class="nav-link" href="entertainment.html">Entertainment</a>
        </li>
      </ul>
    </div>
    <div class="wd-section-container">
            <div class="container-fluid p-0 showcase-header">
              <div class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"
                      alt="starship"
                      class="img-fluid showcase-image d-block w-100"
                    />

                    <p class="h2 carousel-caption">SpaceX's Starship</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
           ${PostSummaryList()}
    `;
};
export default ExploreComponent;
