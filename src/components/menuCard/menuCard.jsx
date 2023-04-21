import React from 'react';
import group from '../../assets/group.png';
import Button from '../buttons/button';
import { useReducer } from "react";
// import  {defaultState, reducer}  from '../../redux/store/store';
import { useSelector, useDispatch } from "react-redux";
import './styles.scss';

const MenuCard = (props) => {
    const { item } = props;
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const isItemAdded = cart?.findIndex((s) => s.id === item.id);
    const addItem = (todo) => {
      dispatch({ type: "ADD_ITEM", id: todo?.id });
    };
    const deleteItem = (todo) => {
      dispatch({ type: "DECREMENT_ITEM", id: todo?.id });
    };
  return (
    <div className='card'>
     <img
     className='dishImage' 
     src={item.img}
     alt=''
     width={160}
     height={120}
     />
     <div className='imgWrapper'>
     <div className='textWrapper'>
      <img 
      src={group}
      width={16}
      height={16}
      alt=''
      />
      <div className='dishName'>
        {item.name}
      </div>
     </div>
     <div className='buttonWrapper'>
     <div className='amount'>
      {item?.price}
      </div>
      <div className='button'>
       <Button 
       addItem={() => addItem(item)}
       deleteItem={() => deleteItem(item)}
       isItem={isItemAdded > -1}
       number={cart[isItemAdded]?.number}
       />
      </div> 
     </div>
     </div>
    </div>
  )
}

export default MenuCard;
