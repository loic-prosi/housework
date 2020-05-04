import React, { useState, useEffect } from "react";
import database from "services/firebase/database";
import moment from "moment";
import "moment/locale/fr";
import CardList from "components/CardList";
import Loading from "components/Loading";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let currentWeek = moment().locale("fr").week();
    const weekOffset = 8;

    const remainder = currentWeek % 2;
    if (remainder !== 0) {
      currentWeek = currentWeek - 1;
    }

    database
      .orderByChild("week")
      .startAt(currentWeek)
      .endAt(currentWeek + weekOffset)
      .on("value", snapshot => {
        const dataKeys = Object.keys(snapshot.val());
        const data = dataKeys.map(_k => {
          return snapshot.val()[_k];
        });
        setData(data);
      });
  }, []);

  return data && data.length !== 0 ? <CardList data={data} /> : <Loading />;
};

export default App;
