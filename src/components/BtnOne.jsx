import React from 'react';
import { Link } from 'react-router-dom';

function BtnOne({data}) {
  return (
    // <Link to={to} className='py-2 d-block text-decoration-none text-center bg-grey border-0 mt-3 fw-md text-black rounded-pill py-2 px-4 w-100 max-200'>
    //   {data}
    // </Link>
    <button type='submit' className='py-2 d-block text-decoration-none text-center bg-black border-0 mt-4 fw-md text-white rounded-3 py-2 px-4 w-100'>{data}</button>

  )
}

export default BtnOne