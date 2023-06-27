

export const Turns = ({isSelected,children}) => {
  
  let className = `turn ${isSelected ? 'is-selected' : ''}`

  return (
    <div className={className}>
        
        <p>{children}</p>
    </div>
  )
}
