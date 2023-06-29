// import React from 'react'

import { useState } from "react";

export const Square = ({ children,isSelected,updateBoard,index }) => {
  
  const [disable,setDisable] = useState(false);

  let className = `square  ${isSelected ? 'is-selected' : ''}`;
  
  const isDisable = () => {
    setDisable(!disable);
  }

  const handleClick = () =>{
    updateBoard(index);
    isDisable();

  }

  return (
    <div onClick={handleClick} className={className}>
      
        <h2 className={disable ? "square-element disable" : "square-element"}>{children}</h2>
    
    </div>
  )
}
