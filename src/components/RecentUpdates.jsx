import React from "react";

const RecentUpdates = ({img, name, message, time}) => {
  return (
    <div className="recent-updates">
      <img className="profile-pic" src={img} alt="profile photo" />

      <h5>
        {name}
        <span className="text-muted">
          {message}
        </span>
        <br />
        <small className="text-muted">{time}</small>
      </h5>
    </div>
  );
};

export default RecentUpdates;
