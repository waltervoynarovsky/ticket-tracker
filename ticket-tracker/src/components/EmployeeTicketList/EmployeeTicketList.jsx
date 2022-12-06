import "./EmployeeTicketList.scss";
import Counter from "../Counter/Counter";
const EmployeeTicketList = (props) => {
  const { teamArr } = props;

  const employeeTickets = teamArr.map((teamObject, index) => {
    console.log(teamObject);
    return (
      <div className="employee-card" key={index + 1}>
        <p>{teamObject.name}</p>
        <p>{teamObject.role}</p>
        <Counter></Counter>
      </div>
    );
  });
  console.log(employeeTickets);
  return (
    <div>
      <div className="employee-tickets">{employeeTickets}</div>
    </div>
  );
};
export default EmployeeTicketList;
