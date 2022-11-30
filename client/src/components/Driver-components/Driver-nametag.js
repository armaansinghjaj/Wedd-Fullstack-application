import React from 'react'
import './Driver-nametag.css';

function Drivernametag(props) {

  return (
    <div id="employee-name-tag">
      <h2 id="wedd-logo-display">Welcome {props.employee}</h2>
      <h2 id="employee-name-display">{props.text}</h2>
    </div>
  )
}

export default Drivernametag;