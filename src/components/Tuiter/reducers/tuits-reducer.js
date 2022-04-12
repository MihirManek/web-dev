// import tuits from "../data/tuits.json";
import {
  DELETE_TUIT,
  FIND_ALL_TUITS,
  CREATE_TUIT,
  UPDATE_TUIT,
} from "../actions/tuits-actions";
const tuitsReducer = (state = [], action) => {
  switch (action.type) {
    case FIND_ALL_TUITS:
      return action.tuits;
    case CREATE_TUIT:
      return [action.newTuit, ...state];

    case "create-tuit":
      const newTuit = {
        tuit: action.tuit,
        _id: new Date().getTime() + "",
        postedBy: {
          username: `${action.profile.firstName} ${action.profile.lastName}`,
        },
        handle: action.profile.handle,
        time: "now",
        avatarImage: action.profile.profilePicture,
        stats: {
          retuits: 111,
          likes: 222,
          comments: 333,
        },
      };
      return [newTuit, ...state];
    case DELETE_TUIT:
      return state.filter((tuit) => tuit._id !== action.tuit._id);
    case UPDATE_TUIT:
      return state.map((tuit) =>
        tuit._id === action.tuit._id ? action.tuit : tuit
      );
    case "like-tuit":
      return state.map((tuit) => {
        if (tuit._id === action.tuit._id) {
          if (tuit.liked === true) {
            tuit.liked = false;
            tuit.stats.likes--;
          } else {
            tuit.liked = true;
            tuit.stats.likes++;
          }
          return tuit;
        } else {
          return tuit;
        }
      });

    default:
      return state;
  }
};

export default tuitsReducer;
