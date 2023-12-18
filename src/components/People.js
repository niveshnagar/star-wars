import React, { useEffect, useState } from "react";

import { PEOPLE_API } from "../utils/constants";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const People = () => {
  const [peopleList, setPeopleList] = useState([]);

  useEffect(() => {
    fetchStarWarsData(PEOPLE_API);
  }, []);

  const fetchStarWarsData = async (API) => {
    const data = await fetch(API);
    const parsedData = await data.json();
    const peopleArr = parsedData?.results;
    setPeopleList(peopleArr);
    console.log(peopleArr);
  };

  return (
    <div className="films-card">
      <h2 className="px-4 py-2 text-3xl text-white font-bold bg-[#9EC8B9]">
        People
      </h2>
      <DataTable
        value={peopleList}
        showGridlines
        paginator
        rows={5}
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column field="name" sortable header="Name"></Column>
        <Column field="gender" sortable header="Gender"></Column>
        <Column field="height" sortable header="Height"></Column>
        <Column field="mass" sortable header="Mass"></Column>
      </DataTable>
    </div>
  );
};

export default People;
