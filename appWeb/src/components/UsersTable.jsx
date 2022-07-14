import React, { useState } from "react";
import DataTable from "react-data-table-component";
import useUsers from "../hooks/useUsers";
import { Link } from "react-router-dom";
export const UsersTable = () => {
  const { search, setSearch, filteredUsers } = useUsers();

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "NOMBRE",
      selector: (row) => row.name,
    },
    {
      name: "EMAIL",
      selector: (row) => row.email,
    },
    {
      name: "TELÉFONO",
      selector: (row) => row.phone,
    },
    {
      name: "CIUDAD",
      selector: (row) => row.address.city,
    },
    {
      name: "SITIO WEB",
      selector: (row) => row.website,
    },
  ];
  const customStyles = {
    rows: {
      style: {
        minHeight: "50px", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
  };
  return (
    <section>
      <div className="flex justify-end w-full">
        <Link to="/v2" className="bg-sky-500 p-2">
          VERSIÓN 2
        </Link>
      </div>

      <DataTable
        title="TABLA DE USUARIOS"
        columns={columns}
        data={filteredUsers}
        customStyles={customStyles}
        fixedHeader
        highlightOnHover
        subHeader
        subHeaderComponent={
          <input
            className="w-96 p-2 rounded-md border-2 "
            type="text"
            placeholder="Buscar nombre"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        }
        subHeaderAlign="center"
      />
    </section>
  );
};
