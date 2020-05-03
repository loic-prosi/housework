import React from "react";
import moment from "moment";
import "moment/locale/fr";

const Card = props => {
  let { name, week } = props;

  const startDate = moment().week(week).startOf("isoWeek").format("D MMMM");
  const endDate = moment()
    .week(week + 2)
    .startOf("isoWeek")
    .subtract(1, "days")
    .format("D MMMM");

  if (!name || name.length === 0) {
    name = "???";
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <h3>
        {startDate} - {endDate}
      </h3>
    </div>
  );
};

export default Card;
