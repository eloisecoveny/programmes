import React from "react";
import TableRow from "../components/TableRow";
import TableHeadings from "../components/TableHeadings";
import "./Table.css";

const Table = (props) => {

  const rows = props.programmes.map((programme, index) => {
      return <TableRow programme={ programme } key={ index }></TableRow>
    })

  return(
    <>
    <div className="table-wrapper">
      <div className="table-headings">
        <TableHeadings />
      </div>
      <div className="programme-rows">
        {rows}
      </div>
    </div>
    </>
  )
}
export default Table;
