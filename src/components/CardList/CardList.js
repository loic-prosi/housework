import React from "react";
import Card from "components/Card";

const CardList = props => {
  const { data } = props;
  return (
    <div className="card-list">
      {data && data.length !== 0
        ? data.map(_i => {
            return <Card name={_i.name} week={_i.week} />;
          })
        : "no data"}
    </div>
  );
};

export default CardList;
