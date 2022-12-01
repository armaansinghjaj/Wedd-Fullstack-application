import React from 'react'
import './nametag.css'

function Nametag(props) {

  return (
    <div id={props.id1}>
      <h2 id={props.id2}>Welcome {props.employee}</h2>
      <h2 id={props.id3}>{props.text}</h2>
    </div>
  )
}

export default Nametag;