import React from "react";

const Employee = props => {
  const { firstName, lastName } = props;
  return (
    <h5>
      {" "}
      Employee Name: {firstName} {lastName}
    </h5>
  );
};

export default Employee;
