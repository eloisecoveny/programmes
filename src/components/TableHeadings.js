import React from "react";
import "./TableRow.css";

const TableHeadings = () => {

  return(
    <div className="row-wrapper">
    <div className="id">
      <p>id</p>
    </div>
    <div className="name">
      <p>Name</p>
    </div>
    <div className="description">
      <p>Description</p>
    </div>
    </div>
  )
}
export default TableHeadings;
