import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
   <section>
    <div className="mycontainer">
      <div className="row">
        <h1 className='mb-0'>You are loged in</h1>
        <Link to="/" className="text-dark text-decoration-none">
                    Logout
                  </Link>
      </div>
    </div>
   </section>
  )
}

export default Welcome