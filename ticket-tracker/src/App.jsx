import "./App.scss";
import team from "./data/team";
import EmployeeTicketList from "./components/EmployeeTicketList/EmployeeTicketList";

const App = () => {
  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">Ticket Tracker</h1>
        <EmployeeTicketList teamArr={team} />
      </header>
    </div>
  );
};

export default App;
