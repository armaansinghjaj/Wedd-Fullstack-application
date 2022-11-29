import React from 'react'
import './Driver-nametag.css';

function Drivernametag() {

    const employeeName = 'Employee Name'
  return (
    <div id="employee-name-tag">
    <h2 id="wedd-logo-display">Welcome Driver:</h2>
    <h2 id="employee-name-display">{employeeName}</h2>
    </div>
  )
}

export default Drivernametag