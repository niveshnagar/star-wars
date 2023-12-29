import React, { useEffect, useState } from "react";
import { FILM_API } from "../utils/constants";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const Films = () => {
  const [filmsList, setFilmsList] = useState([]);

  useEffect(() => {
    fetchStarWarsData(FILM_API);
  }, []);

  const fetchStarWarsData = async (API) => {
    const data = await fetch(API);
    const parsedData = await data.json();
    const filmsArr = parsedData?.results;
    setFilmsList(filmsArr);
  };

  return (
    <div className="films-card w-full m-2">
      <h2 className="px-4 py-2 text-3xl text-white font-bold bg-gray-600 rounded-t-md">
        Films
      </h2>
      {filmsList.length !== 0 ? (
        <DataTable
          className="rounded-b-md"
          value={filmsList}
          showGridlines
          paginator
          rows={5}
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column field="title" sortable header="Title"></Column>
          <Column field="director" sortable header="Director"></Column>
          <Column field="release_date" sortable header="Release Date"></Column>
        </DataTable>
      ) : (
        <p className="text-2xl font-bold flex justify-center items-center h-52">
          Loading...
        </p>
      )}
      :
    </div>
  );
};

export default Films;
