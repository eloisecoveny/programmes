import React from "react";
import TableRow from "../components/TableRow";

const Table = (props) => {

  const rows = props.programmes.map((programme, index) => {
      return <TableRow programme={programme} key={ index }></TableRow>
    })


  return(
    <>
    <div className="programme-rows">
      {rows}
    </div>
    </>
  )
}
export default Table;
