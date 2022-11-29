import React from 'react'
import {Link} from 'react-router-dom'

export default function EmailConfirm() {
  return (
    <div className="emailConfirm">
     <p>
        An email has been sent to you for password change.
     </p> 
     <Link id="complete-link-1" to={'/Home'}><button>Exit</button></Link>
    </div>
  )
}

