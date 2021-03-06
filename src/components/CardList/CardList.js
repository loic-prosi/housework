import React from "react";
import Card from "components/Card";

const CardList = props => {
  const { data } = props;
  return (
    <div className="card-list">
      {data.map((_i, id) => {
        return <Card key={id} id={id + 1} name={_i.name} week={_i.week} />;
      })}
    </div>
  );
};

export default CardList;
