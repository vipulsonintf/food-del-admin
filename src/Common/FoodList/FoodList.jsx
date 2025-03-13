import React from 'react'
import './FoodList.css'

const FoodList = ({imgURL,name,category,price,onclick,id}) => {
  return (
    <div className='list-container'>
        <img src={imgURL} alt="food" />
        <p>{name}</p>
        <p>{category}</p>
        <p>${price}</p>
        <p onClick={()=>onclick(id)} className='cursor'>X</p>
    </div>
  )
}

export default FoodList
