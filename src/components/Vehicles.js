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
    <div className="films-card">
      <h2 className="px-4 py-2 text-3xl text-white font-bold bg-[#9EC8B9]">
        Vehicles
      </h2>
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
    </div>
  );
};

export default Vehicles;
