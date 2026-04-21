import React from 'react'

function Btns(props) {
  return (
    <div>
        {/* <button id='signupBtn'>{props.signup}</button>
        <button id='logiBtn'>{props.login}</button>
        <button id='logiBtn'>{props.logout}</button> */}
        <button id={props.id} onClick={props.onclick}>{props.btn}</button>
    </div>
  )
}
export default Btns