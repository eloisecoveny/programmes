import React from "react";
import PropTypes from 'prop-types';
import "./TableRow.css";

export default function TableHeadings({handleSort}){

  // Handle the sorting when "id" is selected
  const handleIdSort = () => {
    handleSort("id")
  }

  // Handle the sorting when "name" is selected
  const handleNameSort = () => {
    handleSort("name")
  }

  TableHeadings.propTypes = {
    handleSort: PropTypes.func,
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
