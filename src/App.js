import React, { useState, useEffect } from 'react';
import Table from "./containers/Table";
import Search from "./components/Search";
import NewProgrammeForm from "./components/NewProgrammeForm";
import "./App.css";

export default function App(){

  const [programmes, setProgrammes] = useState([])
  const [filteredResults, setFilteredResults] = useState([])
  const [updatedDepo, setUpdatedDepo] = useState([])

  useEffect(() => {
    // Fetch programmes from the API.
    getProgrammes()
  }, [])

  const getProgrammes = () => {
    fetch(`https://gist.githubusercontent.com/simontsang/74509ec1d801e8ce8b99f6b300d38071/raw/f2830f73cb4dc7e575d1be1335e3e41fbfd1cadc/programmes.json`)
    .then(res => res.json())
    .then((prog) => {
      // updatedDepo is a property used as a local data repo for this example as I am not mutating a DB.
      setProgrammes(prog.results)
      setUpdatedDepo([...prog.results])
      setFilteredResults([...prog.results]);
    });
  }

  // Filter search results based on user input.
  const handleFilter = (input) => {
    let filtered = [...updatedDepo].filter(prog => {
      return prog.name.toLowerCase().includes(input.toLowerCase())
    });
    setFilteredResults(filtered)
  }

  // Remove programme from the local depository to remove it from the table.
  const handleDelete = (id) => {
    let found = updatedDepo.find(prog => {
      return prog.id === id
    })
    let index = updatedDepo.indexOf(found)
    let updated = updatedDepo
    updated.splice(index, 1)
    setUpdatedDepo(updated);
    setFilteredResults([...updatedDepo])
  }

  // Sort the order of programmes based on either id or name.
  const handleSort = (type) => {
    let sortedList = []
    if(type === "id"){
      sortedList = filteredResults.sort((a, b) => {
        return a.id - b.id
      })
      setFilteredResults([...sortedList])
    } else if(type === "name"){
      setFilteredResults([...updatedDepo])
    }
  }

  // Add a new programme to the local depository so it can be added to the table.
  const newProgramme = (name, description, active) => {
    let ids = updatedDepo.map(prog => prog.id)
    let maxId = Math.max(...ids)
    let newProgramme = {
      "id": maxId + 1,
      "name": name,
      "shortDescription": description,
      "active": active
    }
    let updated = [...updatedDepo]
    updated.push(newProgramme)
    setUpdatedDepo(updated)
    setFilteredResults([...updated])
  }

  return(
    <div className="app-wrapper">
      <h1>Programmes</h1>
      <div className="input-wrapper">
        <Search programmes={updatedDepo} handleFilter={handleFilter} />
      </div>
      <div className="input-wrapper">
        <NewProgrammeForm newProgramme={newProgramme}/>
      </div>
        <Table programmes={filteredResults} handleDelete={handleDelete} handleSort={handleSort}/>
    </div>
  )
}
