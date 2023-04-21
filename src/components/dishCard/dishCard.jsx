import React from 'react';
import group from '../../assets/group.png'
import Button from '../buttons/button';
import { useSelector, useDispatch } from "react-redux";
import './styles.scss';

const DishCard = (props) => {
  const {item} = props;
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
    <div className='mainItem'>
      <img 
      src={item.img}
      className='imageItem'
      alt=''
      width={71}
      />
      <div className='rightItem'>
          <div>
            {item?.name}
          </div>
          <div className='priceWrapper'>
           <div className='amount'>
            <img 
            src={group}
            alt=''
            width={16}
            height={16}
            />
            <div className='amount'>
             {item?.price}
           </div>
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

export default DishCard
