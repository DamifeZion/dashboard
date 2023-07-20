import React from "react";

const InsightCard = ({
  styleIcon,
  icon,
  total,
  income,
  styleCircle,
  percentage,
  time,
}) => {
  return (
    <div className="insight-card">
      <a className={styleIcon}>{icon}</a>

      <div className="col2">
        <h3>
          {total} <br /> <b>{income}</b>
        </h3>

        <div className="progress">
          <svg>
            <circle className={styleCircle} cx={30} cy={30} r={26} />
          </svg>
          <p className="text-muted">{percentage}</p>
        </div>
      </div>

      <small className="text-muted">{time}</small>
    </div>
  );
};

export default InsightCard;
