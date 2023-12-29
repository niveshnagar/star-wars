import React, { useEffect, useState } from "react";
import { VEHICLES_API } from "../utils/constants";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const Vehicles = () => {
  const [vehiclesList, setVehiclesList] = useState([]);

  useEffect(() => {
    fetchStarWarsData(VEHICLES_API);
  }, []);

  const fetchStarWarsData = async (API) => {
    const data = await fetch(API);
    const parsedData = await data.json();
    const vehiclesArr = parsedData?.results;
    setVehiclesList(vehiclesArr);
    console.log(parsedData);
  };

  return (
    <div className="vehicles-card w-full rounded-md m-2">
      <h2 className="px-4 py-2 text-3xl text-white font-bold bg-gray-600 rounded-t-md">
        Vehicles
      </h2>
      {vehiclesList.length !== 0 ? (
        <DataTable
          value={vehiclesList}
          showGridlines
          paginator
          rows={5}
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column field="name" sortable header="Name"></Column>
          <Column field="model" sortable header="Model"></Column>
          <Column field="passengers" sortable header="Passengers"></Column>
          <Column field="cost_in_credits" sortable header="Cost"></Column>
        </DataTable>
      ) : (
        <p className="text-2xl font-bold flex justify-center items-center h-52">
          Loading...
        </p>
      )}
    </div>
  );
};

export default Vehicles;
