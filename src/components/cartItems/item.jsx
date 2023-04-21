import React from 'react';
import group from '../../assets/group.png';
import Button from '../buttons/button';
import { useDispatch } from "react-redux";
import './styles.scss'

const Item = (props) => {
    const {item, type} = props;
    const dispatch = useDispatch();
    const addItem = (todo) => {
      dispatch({ type: "ADD_ITEM", id: todo?.id });
    };
    const deleteItem = (todo) => {
      dispatch({ type: "DECREMENT_ITEM", id: todo?.id });
    };
  return (
    <div className='itemBox'>
        <div className='left'>
         <img 
         src={group}
         alt=''
         width={16}
         height={16}
         />
         <div className='group'>
         <div>{item?.name}</div>
            <div className='price'>{item?.price}</div>
         </div>
        </div>
        {type === 'current' ? (
    <div className='right'>
    <Button 
      addItem={() => addItem(item)}
      deleteItem={() => deleteItem(item)}
      isItem={true}
      number={item?.number}
    />
    </div>
        ) : (
          <div className='rightContainer'>
          {item?.number}
          </div>
        )}
    </div>
  )
}

export default Item
