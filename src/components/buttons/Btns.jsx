import React from 'react'

function Btns(props) {
  return (
    <div>
        <button id={props.id} onClick={props.onclick}>{props.btn}</button>
    </div>
  )
}
export default Btns