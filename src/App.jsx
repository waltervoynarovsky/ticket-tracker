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
  const searchedTickets = team.filter(() => {
    const searchedEmployees = team.name.includes(searchTerm);
    return searchedEmployees;

    const allPeople = searchedTickets.map((person) => {});
  });
  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">Ticket Tracker</h1>
        <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
        <EmployeeTicketList teamArr={team} />
      </header>
    </div>
  );
};

export default App;
