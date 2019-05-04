import React, { useState, useEffect } from "react";

export default function Table({ programmes }){

  useEffect(() => {
    console.log(programmes);
  }, [])

  return(
    <>
    {programmes[0].name}
    </>
  )

}
