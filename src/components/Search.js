import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import "./Input.css";

export default function Search({programmes, handleFilter}){

  const [text, setText] = useState("")

  useEffect(() => {
    handleFilter(text)
  }, [text])

  // Handle the list filtering as user input is detected
  const handleChange = (evt) => {
    setText(evt.target.value)
  }

  Search.propTypes = {
    handleFilter: PropTypes.func,
  }

  return (
    <>
    <label>Search: </label>
    <input type="text" value={text} onChange={handleChange} placeholder="search by name"/>
    </>
  )
}
