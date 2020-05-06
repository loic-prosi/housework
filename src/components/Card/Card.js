import React from "react";
import moment from "moment";
import "moment/locale/fr";

const Card = props => {
  let { id, name, week } = props;
  const letter = name[0];

  const currentDay = moment();

  const startDate = moment().week(week).startOf("isoWeek").add(3, "days");
  const endDate = moment()
    .week(week + 1)
    .startOf("isoWeek")
    .add(3, "days")
    .subtract(1, "minutes");

  const currentDayInPeriod = currentDay.isBetween(startDate, endDate);

  if (!name || name.length === 0) {
    name = "???";
  }

  return (
    <div
      className={`card card-${id} ${
        currentDayInPeriod ? "card--current-period" : ""
      }`}
    >
      <div className="card__letter">{letter}</div>
      <div className="card__info">
        <h2 className="card__name">{name}</h2>
        <p className="card__period">
          {startDate.format("D MMMM")} - {endDate.format("D MMMM")}
        </p>
      </div>
    </div>
  );
};

export default Card;
