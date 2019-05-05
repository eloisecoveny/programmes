import React from "react";
import "./TableRow.css";

const TableHeadings = (props) => {

  const handleIdSort = () => {
    props.handleSort("id")
  }

  const handleNameSort = () => {
    props.handleSort("name")
  }

  return(
    <div className="row-wrapper">
      <div className="id cell header">
        <p onClick={handleIdSort}>id</p>
      </div>
      <div className="name cell header">
        <p onClick={handleNameSort}>Name</p>
      </div>
      <div className="description cell header">
        <p>Description</p>
      </div>
      <div className="activity cell header">
        <p>Active</p>
      </div>
      <div className="delete cell header">
        <p>Delete</p>
      </div>
    </div>
  )
}
export default TableHeadings;
