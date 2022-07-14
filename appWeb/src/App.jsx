import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { UsersCards } from "./components/usersCards/UsersCards";
import { UsersTable } from "./components/UsersTable";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersTable />} />
        <Route path="/v2" element={<UsersCards />} />
      </Routes>
    </Router>
  );
}

export default App;
