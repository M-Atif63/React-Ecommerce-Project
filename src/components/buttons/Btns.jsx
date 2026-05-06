import React from 'react'
import { Navigate } from 'react-router-dom'

function  Btns(props) {
  return (
    <div>
      <button id={props.id} className={props.className} onClick={props.onclick} >{props.btn}</button>
    </div>
  )
}
export default Btns
