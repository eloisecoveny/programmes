import React from "react";
import "./TableRow.css";

const TableRow = (props) => {

  // Handle the deletion of a programme
  const handleClick = () => {
    props.handleDelete(props.programme.id)
  }

  return(
    <div className={ props.programme.active ? 'active' : 'inactive' }>
    <div className="row-wrapper">
      <div className="id cell">
        <p>{props.programme.id}</p>
      </div>
      <div className="name cell">
        <p>{props.programme.name}</p>
      </div>
      <div className="description cell">
        <p>{props.programme.shortDescription}</p>
      </div>
      <div className="activity cell">
        <p>{props.programme.active ? 'true' : 'false'}</p>
      </div>
      <div className="button cell">
        <button onClick={handleClick}>x</button>
      </div>
    </div>
    </div>
  )
}
export default TableRow;
