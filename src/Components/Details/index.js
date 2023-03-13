import React from 'react';
import "./index.css";
const Detail = (props) => {
    const {listDetail,onDelete}=props
    const {id,title,data}=listDetail
    const onDeleteItem=()=>{
        onDelete(id)
    }
    return (
        <li className='brow_cont'>
            <div className='para_cont'>
           <h1 className='heading'>{title}</h1>
           <p>{data}</p>
           </div>
            <button className='delete_sty' onClick={onDeleteItem} ><img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" alt="Wrong_Url" className='img_styling '/>
             </button>
        </li>
    );
};


export default Detail;