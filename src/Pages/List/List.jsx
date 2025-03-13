import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import FoodList from '../../Common/FoodList/FoodList'
import './List.css'

const List = () => {
  const url = "http://localhost:8080"
  const [list, setList] = useState([])

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    console.log(response.data)
    if (response.data.success) {
      setList(response.data.data)
    } else {
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  const removeItem = async(foodId)=>{
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fetchList()
    if(response.data.success){
      toast.success(response.data.message)
    }else{
      toast.error("error")
    }
  }
  return (
    <div className='list add flex-col'>
      <p>All food </p>
      <div className="list-table">
        <div className="list-table-formate title">
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p>Action</p>
        </div>
        <div className='food-list-container'>

        </div>
        {list.map((item,index)=>{
          return <FoodList key={item.name} id={item._id} name={item.name} category={item.category} price={item.price} imgURL={`${url}/images/`+item.image} onclick={removeItem}/>
        })}
      </div>
    </div>
  )
}

export default List
