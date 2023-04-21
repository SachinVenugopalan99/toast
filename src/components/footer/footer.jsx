import React from 'react';
import vector from '../../assets/vector.png';
import shoppingBag from '../../assets/shoppingBag.png';
import bookOpen from '../../assets/bookOpen.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import './styles.scss';

const Footer = (props) => {
  const { selectedTab } = props;
  const navigate = useNavigate();
  const cart = useSelector(state => state.cart);

  const sum = () => {
    let total = 0;
    cart?.forEach((item) => {
      total += item?.number
    })
    return total;
  }
  return (
    <div className='footerContainer'>
        <div className='box-1'>
         <img 
         src={vector}
         width={9}
         height={15}
         alt=''
         />
        </div>
        <div className={`box-1 ${selectedTab !== 'Special' && 'box-2'}`}>
        <img 
         src={bookOpen}
         width={20}
         height={20}
         alt=''
         />
         {selectedTab !== 'Special' && 'box-2' && (
          <div className='menu'>
             Menu
          </div>
         )}
        </div>
        <div className='box-1 box-3'
        onClick={() => navigate('/carts')}
        >
        <img 
         src={shoppingBag}
         width={20}
         height={20}
         alt=''
         />
         {sum() > 0 && (
         <div className='count'>
         {sum()}
        </div>
         )}
        </div>
    </div>
  )
}

export default Footer