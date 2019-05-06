import React from "react";
import PropTypes from 'prop-types';
import "./TableRow.css";

export default function TableRow({programme, handleDelete}){

  // Handle the deletion of a programme
  const handleClick = () => {
    handleDelete(programme.id)
  }

  TableRow.propTypes = {
    programme: PropTypes.object,
    handleDelete: PropTypes.func,
  }

  return(
    <div className={ programme.active ? 'active' : 'inactive' }>
    <div className="row-wrapper">
      <div className="id cell">
        <p>{programme.id}</p>
      </div>
      <div className="name cell">
        <p>{programme.name}</p>
      </div>
      <div className="description cell">
        <p>{programme.shortDescription}</p>
      </div>
      <div className="activity cell">
        <p>{programme.active ? 'true' : 'false'}</p>
      </div>
      <div className="button cell">
        <button onClick={handleClick}>x</button>
      </div>
    </div>
    </div>
  )
}

// const TableRow = ({programme, handleDelete}) => {
//
//   // Handle the deletion of a programme
//   const handleClick = () => {
//     handleDelete(programme.id)
//   }
//
//   TableRow.propTypes = {
//     programme: PropTypes.object,
//     handleDelete: PropTypes.func,
//   }
//
//   return(
//     <div className={ programme.active ? 'active' : 'inactive' }>
//     <div className="row-wrapper">
//       <div className="id cell">
//         <p>{programme.id}</p>
//       </div>
//       <div className="name cell">
//         <p>{programme.name}</p>
//       </div>
//       <div className="description cell">
//         <p>{programme.shortDescription}</p>
//       </div>
//       <div className="activity cell">
//         <p>{programme.active ? 'true' : 'false'}</p>
//       </div>
//       <div className="button cell">
//         <button onClick={handleClick}>x</button>
//       </div>
//     </div>
//     </div>
//   )
// }
// export default TableRow;
