import React, { useState, useEffect } from "react";
import database from "services/firebase/database";
import moment from "moment";
import CardList from "components/CardList";

const App = () => {
  const [data, setData] = useState([]);
  const [, setWeek] = useState();

  useEffect(() => {
    const currentWeek = moment().locale("fr").week();
    setWeek(currentWeek);
    database
      .orderByChild("week")
      .startAt(currentWeek)
      .endAt(currentWeek + 8)
      .on("value", snapshot => {
        const dataKeys = Object.keys(snapshot.val());
        const data = dataKeys.map(_k => {
          return snapshot.val()[_k];
        });
        setData(data);
      });
  }, []);

  return (
    <div className="App">
      <CardList data={data} />
    </div>
  );
};

export default App;
