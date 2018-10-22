import React from 'react'

function Adder(props){
  return(
    <button onClick={props.add}>
      Añadir task
    </button>
  )
}

export default Adder;