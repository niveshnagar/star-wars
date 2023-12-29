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
    <div className="people-card w-full rounded-md m-2">
      <h2 className="px-4 py-2 text-3xl text-white font-bold bg-gray-600 rounded-t-md">
        People
      </h2>
      {peopleList.length !== 0 ? (
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
      ) : (
        <p className="text-2xl font-bold flex justify-center items-center h-52">
          Loading...
        </p>
      )}
    </div>
  );
};

export default People;
