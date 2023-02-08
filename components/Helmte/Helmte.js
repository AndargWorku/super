import React from 'react'

const Helmte = (props) => {
    document.title="Furniture -"+props.title;

  return (
    <div className="w-100">
{props.children}
      
     </div>
  )
}

export default Helmte
