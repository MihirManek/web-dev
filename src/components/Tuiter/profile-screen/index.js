import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./profile-screen.css";
const ProfileScreen = ({ editMode = false }) => {
  const navigate = useNavigate();
  const profile = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  const [profileData, setProfileData] = useState({
    name: profile.firstName + " " + profile.lastName,
    bio: profile.bio,
    location: profile.location,
    dob: new Date(profile.dateOfBirth).toLocaleDateString("en-CA"),
  });

  const handleProfileChange = (evt) => {
    const value = evt.target.value;

    setProfileData({
      ...profileData,
      [evt.target.name]: value,
    });
  };

  const handleSave = () => {
    let tempProfile = {};
    for (let key in profileData) {
      switch (key) {
        case "name":
          const name = profileData[key].split(" ");
          tempProfile = {
            ...tempProfile,
            firstName: name[0] || "",
            lastName: name[1] || "",
          };
          break;
        case "dob":
          tempProfile = {
            ...tempProfile,
            dateOfBirth: profileData[key],
          };
          break;
        default:
          tempProfile = {
            ...tempProfile,
            [key]: profileData[key],
          };
          break;
      }
    }
    console.log(profileData, tempProfile);
    dispatch({ type: "save-profile", profile: tempProfile });
    navigate("/tuiter/profile");
  };

  return (
    <>
      <div className="wd-profile d-flex flex-column">
        <nav className="navbar navbar-dark bg-secondary bg-opacity-50 d-flex align-items-center justify-content-start">
          {editMode ? (
            <i
              className="fas fa-times mx-3 wd-button-action"
              onClick={() => navigate(-1)}
            ></i>
          ) : (
            <i
              className="fas fa-arrow-left mx-3 wd-button-action"
              onClick={() => navigate(-1)}
            ></i>
          )}

          <div className="d-flex flex-row justify-content-between flex-grow-1 me-3">
            <div className="d-flex flex-column justify-content-center">
              <div className="h6 mb-0">
                {editMode
                  ? `Edit profile`
                  : `${profile.firstName} ${profile.lastName}`}
              </div>
              {!editMode && (
                <div className="text-muted">
                  <small>{`${profile.tweetCount} Tweets`}</small>
                </div>
              )}
            </div>
            {editMode && (
              <div>
                <button
                  className="btn btn-primary bg-white rounded-pill text-black fw-bold"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            )}
          </div>
        </nav>
        <div className="d-flex flex-column">
          <div
            className="d-flex justify-content-center flex-row wd-banner-container"
            style={{ zIndex: 0 }}
          >
            <img
              className="img-fluid wd-profile-banner"
              src={profile.bannerPicture}
              alt={`${profile.firstName} ${profile.lastName}'s Banner`}
            />
          </div>
          <div className="wd-profile-content d-flex flex-column">
            <div className="wd-profile-header position-relative d-flex flex-column ">
              <div className="wd-profile-info">
                <div className="d-flex flex-grow-1 flex-column">
                  <img
                    src={profile.profilePicture}
                    alt={`${profile.firstName} ${profile.lastName}`}
                    className="img-fluid rounded-circle wd-profile-image"
                  />
                  <div className="d-flex flex-column">
                    {editMode ? (
                      <div className="form-floating mb-3 ">
                        <input
                          type="text"
                          className="form-control bg-black text-white border border-light rounded"
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={profileData.name}
                          onChange={handleProfileChange}
                        />
                        <label htmlFor="name">Name</label>
                      </div>
                    ) : (
                      <div className="h4 mb-0">
                        {profile.firstName} {profile.lastName}
                      </div>
                    )}

                    {!editMode && (
                      <div className="text-muted">@{profile.handle}</div>
                    )}

                    <div>
                      {editMode ? (
                        <div className="form-floating mb-3 ">
                          <textarea
                            className="form-control bg-black text-white border border-light rounded"
                            name="bio"
                            id="bio"
                            placeholder="Hi, I am John Doe"
                            style={{ height: "100px" }}
                            value={profileData.bio}
                            onChange={handleProfileChange}
                          ></textarea>
                          <label htmlFor="bio">Bio</label>
                        </div>
                      ) : (
                        <div>{profile.bio}</div>
                      )}
                    </div>
                    {editMode ? (
                      <>
                        <div className="form-floating mb-3 ">
                          <input
                            type="text"
                            className="form-control bg-black text-white border border-light rounded"
                            id="location"
                            name="location"
                            placeholder="United States"
                            value={profileData.location}
                            onChange={handleProfileChange}
                          />
                          <label htmlFor="location">Location</label>
                        </div>
                        <div className="form-floating mb-3 ">
                          <input
                            type="date"
                            className="form-control bg-black text-white border border-light rounded"
                            id="dob"
                            name="dob"
                            placeholder="12/31/1990"
                            value={profileData.dob}
                            onChange={handleProfileChange}
                          />
                          <label htmlFor="dob">Date of Birth</label>
                        </div>
                      </>
                    ) : (
                      <div className="d-flex flex-row align-items-center my-2">
                        <div className="text-muted ms-0 me-3 d-flex flex-row align-items-center">
                          <i className="fas fa-map-marker-alt me-1"></i>
                          {profile.location}
                        </div>
                        <div className="text-muted ms-0 me-3 d-flex flex-row align-items-center">
                          <i className="fas fa-birthday-cake me-1"></i>
                          {`Born ${new Date(profile.dateOfBirth).toLocaleString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}`}
                        </div>
                        <div className="text-muted ms-0 me-3 d-flex flex-row align-items-center">
                          <i className="fas fa-calendar-alt me-1"></i>
                          {`Joined ${new Date(
                            profile.dateJoined
                          ).toLocaleString("en-US", {
                            year: "numeric",
                            month: "long",
                          })}`}
                        </div>
                      </div>
                    )}

                    <div className="d-flex flex-row ">
                      <div className="d-flex flex-row align-items-baseline me-3">
                        <div className="h6 mb-0 me-1">
                          {profile.followingCount}
                        </div>
                        <div> Following</div>
                      </div>
                      <div className="d-flex flex-row align-items-baseline me-3">
                        <div className="h6 mb-0 me-1">
                          {profile.followersCount}
                        </div>
                        <div> Followers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row justify-content-end">
                <Link to="/tuiter/profile/edit">
                  <button
                    type="button"
                    className="btn btn-light rounded-pill m-3 wd-button-action"
                    style={{ zIndex: 2, position: "relative" }}
                  >
                    Edit Profile
                  </button>
                </Link>
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileScreen;
