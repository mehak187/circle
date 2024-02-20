import React from 'react';

function Field({type,fieldfor,text,name}) {
  return (
    <div className="my-3">
        <label className='w-100' htmlFor={fieldfor}>{text}</label>
        <input type={type} id={fieldfor} name={name} className='w-100 border border-1 rounded-3 py-2 px-3 mt-1 border-dark' />
    </div>
  )
}

export default Field