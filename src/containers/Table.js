import React from "react";
import PropTypes from 'prop-types';
import TableRow from "../components/TableRow";
import TableHeadings from "../components/TableHeadings";
import "./Table.css";

const Table = ({programmes, handleDelete, handleSort}) => {

  // Generate a table row for each programme
  const rows = programmes.map((programme, index) => {
      return <TableRow programme={programme} handleDelete={handleDelete} key={index}></TableRow>
    })

  Table.propTypes = {
    programmes: PropTypes.array,
    handleDelete: PropTypes.func,
    handleSort: PropTypes.func,
  }

  return(
    <>
    <div className="table-wrapper">
      <div className="table-headings">
        <TableHeadings handleSort={handleSort}/>
      </div>
      <div className="programme-rows">
        {rows}
      </div>
    </div>
    </>
  )
}
export default Table;
