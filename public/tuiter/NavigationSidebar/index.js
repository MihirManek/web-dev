const links = [
  {
    id: "home",
    path: "../HomeScreen/home.html",
    label: "Home",
    icon: "fa fa-home",
  },
  {
    id: "explore",
    path: "../ExploreScreen/explore.html",
    label: "Explore",
    icon: "fa fa-hashtag"
  },
  {
    id: "notifications",
    path: "",
    label: "Notifications",
    icon: "fa fa-bell"
  },
  {
    id: "messages",
    path: "",
    label: "Messages",
    icon: "fa fa-envelope"
  },
  {
    id: "bookmarks",
    path: "",
    label: "Bookmarks",
    icon: "fa fa-bookmark"
  },
  {
    id: "lists",
    path: "",
    label: "Lists",
    icon: "fa fa-list"
  },
  {
    id: "profile",
    path: "",
    label: "Profile",
    icon: "fa fa-user"
  },
];

const NavigationSidebar = (active) => {
  return `
          <div class="list-group">
              <a class="list-group-item" href="/">
                  <i class="fab fa-twitter"></i></a>
                ${links.map((l) => {
                  return `
                  <a
                    href="${l.path || "#"}"
                    class="list-group-item list-group-item-action d-flex justify-content-center justify-content-xl-start align-items-center ${
                      l.id === active ? "active" : ""
                    }"
                    aria-current="${l.id === active ? "true" : "false"}"
                    ><i class="${l.icon} me-0 me-xl-2"></i
                    ><span class="d-none d-xl-inline-block">${l.label}</span></a
                  >
                  `;
                }).join('')}
                <a
                  href="#"
                  class="list-group-item list-group-item-action d-flex justify-content-center justify-content-xl-start align-items-center"
                  ><span class="fa-stack small me-0 me-xl-2">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i> </span
                  ><span class="d-none d-xl-inline-block">More</span></a
                >
          </div>
          <div class="d-grid mt-2">
              <a href="tweet.html"
                 class="btn btn-primary btn-block rounded-pill">
                  Tweet</a>
          </div>
  `;
};
export default NavigationSidebar;
