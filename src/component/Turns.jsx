

export const Turns = ({isSelected,children}) => {
  
  let className = `turn ${isSelected ? 'is-selected' : ''}`
  
    return (
    <div >
        <p className={className}>{children}</p>
        {/* {children} */}
    </div>
  )
}
