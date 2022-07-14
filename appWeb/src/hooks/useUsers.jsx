import { useContext } from "react";
import UsersContext from "../context/usersProvider";

const useUsers = () => {
  return useContext(UsersContext);
};

export default useUsers;
