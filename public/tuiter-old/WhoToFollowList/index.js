import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";
const WhoToFollowList = () => {
  return `
            <ul class="list-group">
            <li
              class="list-group-item d-flex justify-content-between align-items-center fw-bold"
            >
              Who to follow
            </li>
            ${who.map((w) => WhoToFollowListItem(w)).join("")}
            </ul>
`;
};
export default WhoToFollowList;
