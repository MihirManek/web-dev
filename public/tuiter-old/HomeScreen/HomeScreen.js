import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import HomeComponent from "./HomeComponent.js";

(function ($) {
  $("#wd-home").append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
          ${NavigationSidebar('home')}
        </div>
        <div class="col-10 col-md-10 col-lg-7 col-xl-6">
          ${HomeComponent()}
        </div>
        <div class="d-none d-md-none d-lg-block col-lg-4 col-xl-4">
          ${PostSummaryList()}
        </div>
        </div>
    `);
})($);
