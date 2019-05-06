import React, { useState } from "react";
import PropTypes from 'prop-types';
import "./Input.css";

export default function NewProgrammeForm({newProgramme}){

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [active, setActive] = useState(false)

  // Dynamically update user input field name
  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  // Dynamically update user input field description
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  // Update user selection active
  const handleActiveSelect = (event) => {
    setActive(event.target.value)
  }

  // Handle the saving of a new programme to the local depository
  const handleSubmit = (event) => {
    event.preventDefault()
    const newName = name.trim()
    const newDescription = description.trim()
    const newActive = active
    if(!name || !description) return;

    newProgramme(newName, newDescription, newActive)
    // Reset the state
    setDescription("")
    setName("")
    setActive(false)
  }

  NewProgrammeForm.propTypes = {
    newProgramme: PropTypes.func,
  }

  return (
    <>
    <label>Add programme: </label>
    <form className="new-prog-form" onSubmit={handleSubmit}>
    <input
    type="text"
    placeholder="Programme name"
    value={name} onChange={handleNameChange}
    />
    <input
    type="text"
    placeholder="Description"
    value={description}
    onChange={handleDescriptionChange}
    />
    <select value={active} onChange={handleActiveSelect}>
    <option value="false">False</option>
    <option value="true">True</option>
    </select>
    <input type="submit" value="Post" />
    </form>
    </>
  )
}
