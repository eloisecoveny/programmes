import React, { useState, useEffect } from 'react';
import Table from "./containers/Table";

export default function App(){

  const [programmes, setProgrammes] = useState(["null"])

   const getProgrammes = () => {
    fetch(`https://gist.githubusercontent.com/simontsang/74509ec1d801e8ce8b99f6b300d38071/raw/f2830f73cb4dc7e575d1be1335e3e41fbfd1cadc/programmes.json`)
    .then(res => res.json())
    .then(prog => setProgrammes(prog.results))
    setTimeout(() => {
      console.log(programmes)
    }, 250);
  }

  useEffect(() => {
    getProgrammes()
  }, [])

  return (
    <>
    <p>App</p>
    <Table programmes={programmes}/>
    </>
  )
}
