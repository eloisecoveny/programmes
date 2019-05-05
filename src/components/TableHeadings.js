import React from "react";
import "./TableRow.css";

const TableHeadings = () => {

  return(
    <div className="row-wrapper">
    <div className="id cell header">
      <p>id</p>
    </div>
    <div className="name cell header">
      <p>Name</p>
    </div>
    <div className="description cell header">
      <p>Description</p>
    </div>
    </div>
  )
}
export default TableHeadings;
