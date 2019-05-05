import React from "react";

const TableRow = (props) => {

  return(
    <div className="row-wrapper">
    <p>{props.programme.id}</p>
    <p>{props.programme.name}</p>
    <p>{props.programme.shortDescription}</p>
    </div>
  )
}
export default TableRow;
