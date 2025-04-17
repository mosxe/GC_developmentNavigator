import { FunctionComponent } from "react";
import EmployeeInfo from "./EmployeeInfo";
import EmployeeActivity from "./EmployeeActivity";

const Employee: FunctionComponent = () => {
  return (
    <section>
      <EmployeeInfo />
      <EmployeeActivity />
    </section>
  );
};

export default Employee;
