const profileData = {
  firstName: "Mihir",
  lastName: "Manek",
  handle: "mihirmanek",
  profilePicture: "/tuiter-old/me.png",
  bannerPicture: "/tuiter-old/background.jpg",
  bio: "Software Engineer, Tech & Space enthusiast.",
  website: "https://mihirmanek.gitlab.io/",
  location: "Boston, MA",
  dateOfBirth: "1/1/1990",
  dateJoined: "4/2/2000",
  followingCount: 500,
  followersCount: 9123,
  tweetCount: 5152,
};

const profileReducer = (state = profileData, action) => {
  switch (action.type) {
    case "save-profile":
      return {
        ...state,
        ...action.profile,
      };
    default:
      return state;
  }
};

export default profileReducer;
