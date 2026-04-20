import React from 'react'

function error(props) {
  return (
    <div>
        <p id='error'>{props.error}</p>
    </div>
  )
}

export default error