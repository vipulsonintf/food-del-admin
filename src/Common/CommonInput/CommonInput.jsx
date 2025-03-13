import React from 'react'

const CommonInput = ({}) => {
  return (
    <div>
      <p>{lable}</p>
      <input type={type} placeholder={placeholder}/>
    </div>
  )
}

export default CommonInput
