import React from "react";
import useUsers from "../../hooks/useUsers";
import { Link } from "react-router-dom";
import Card from "./Card";

export const UsersCards = () => {
  const { search, setSearch, filteredUsers } = useUsers();
  return (
    <section className="min-h-screen bg-slate-300 flex flex-col items-center">
      <div className="w-full">
        <Link to="/" className="bg-sky-500 p-2">
          VERSIÓN 1
        </Link>
      </div>

      <div className="w-full text-center">
        <input
          type="text"
          placeholder="Buscar usuario..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-96 p-2 rounded-md"
        />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 xl:pt-8">
        {filteredUsers.map((user) => {
          return <Card user={user} />;
        })}
      </div>
    </section>
  );
};
