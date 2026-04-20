import React from 'react'

function Inputfields(props) {
  return (
    <div className="inputs-wrapper">
        <input type="text" id='title' placeholder={props.proTitle} />
        <input type="text" id='desc' placeholder={props.proDescription} />
        <input type="number" id='price' placeholder={props.ProPrice} />
        <input type="url" id='imgUrl' placeholder={props.proImgUrl} />
    </div>
  )
}

export default Inputfields