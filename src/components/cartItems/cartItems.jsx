import React from 'react';
// import  {defaultState}  from '../../redux/store/store';
import Item from './item';
import './styles.scss'

const CartItems = (props) => {
  const { data, type } = props;
  return (
    <>
    {data?.length > 0 && (
      <div className='cartItems'>
      {data?.map((item) => 
      <Item 
      item={item}
      type={type}
      />
      )}
      </div>
    )}
    </>
  )
}

export default CartItems
