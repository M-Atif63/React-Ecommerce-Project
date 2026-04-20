import React from 'react'

function Heading(props) {
    return (
        <div>
            <h2 style={{ textAlign: "center", marginBottom: "10px", color: "#1a1a1a", fontSize: "28px" }}>{props.text}</h2>
            <h3 >{props.value}</h3>
        </div>
    )
}

export default Heading