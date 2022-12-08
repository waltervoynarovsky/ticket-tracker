import "./App.scss";
import team from "./data/team";
import EmployeeTicketList from "./components/EmployeeTicketList/EmployeeTicketList";
import { useState } from "react";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    const input = event.target.value;
    setSearchTerm(input);
  };
  const searchedTickets = team.filter((filtered) => {
    const searchedEmployees = filtered.name.toLowerCase().includes(searchTerm);
    return searchedEmployees;
  });

  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">Ticket Tracker</h1>
        <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
        <EmployeeTicketList teamArr={searchedTickets} />
      </header>
    </div>
  );
};

export default App;
