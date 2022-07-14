import { useState, useEffect, createContext } from "react";

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const getUsers = async () => {
    try {
      const url = `https://jsonplaceholder.typicode.com/users`;
      const response = await fetch(url);
      const result = await response.json();
      setUsers(result);
      setFilteredUsers(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    const filteringUsers = users.filter((user) => {
      return user.name.toLowerCase().match(search.toLowerCase());
    });
    setFilteredUsers(filteringUsers);
  }, [search]);

  return (
    <UsersContext.Provider
      value={{ users, getUsers, search, setSearch, filteredUsers }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export { UsersProvider };
export default UsersContext;
