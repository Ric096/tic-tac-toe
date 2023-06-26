// import React from 'react'

export const Square = ({ children,isSelected,updateBoard,index }) => {
  
  let className = `square  ${isSelected ? 'is-selected' : ''}`
  
  const handleClick = () =>{
    updateBoard();
  }

  return (
    <div onClick={handleClick} className={className}>
      
        {children}
    
    </div>
  )
}
