import React from "react";
import moment from "moment";
import "moment/locale/fr";

const Card = props => {
  let { id, name, week } = props;
  const letter = name[0];

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
    <div className={`card card-${id}`}>
      <div className="card__letter">{letter}</div>
      <div className="card__info">
        <h2 className="card__name">{name}</h2>
        <p className="card__period">
          {startDate} - {endDate}
        </p>
      </div>
    </div>
  );
};

export default Card;
