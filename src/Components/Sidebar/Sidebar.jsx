import React from 'react'
import { assets } from '../../assets/assets'
import './Sidebar.css'
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
    const navigate = useNavigate();
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
        
            <div onClick={()=>navigate("/add")} className="sidebar-option">
                <img src={assets.add_icon} alt="add" />
                <p>Add Item</p>
            </div>
            <div onClick={()=>navigate("/list")} className="sidebar-option">
                <img src={assets.order_icon} alt="add" />
                <p>List Item</p>
            </div>
            <div onClick={()=>navigate("/orders")} className="sidebar-option">
                <img src={assets.order_icon} alt="add" />
                <p>Orders</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
