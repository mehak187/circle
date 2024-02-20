import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
   <section>
    <div className="mycontainer">
      <div className="d-flex py-4 align-items-center justify-content-between">
        <p className='mb-0 fs-5'>You are loged in</p>
        <Link to="/" className=" text-dark text-decoration-none py-2 d-block text-decoration-none text-center bg-black border-0  fw-md text-white rounded-3 py-2 px-4 ">
                    Logout
                  </Link>
      </div>
    </div>
   </section>
  )
}

export default Welcome