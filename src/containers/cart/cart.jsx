import React from 'react';
import message from '../../assets/message.png';
import arrowLeft from '../../assets/arrowLeft.png';
import arrowRigfht from '../../assets/arrowRight.png'
import { useNavigate } from "react-router-dom";
import Accordion from '../../components/accordion/accordion';
import CartItems from '../../components/cartItems/cartItems';
import { useSelector, useDispatch } from "react-redux";
import './styles.scss'

const Cart = () => {
  let navigate = useNavigate();
  const data = useSelector(state => state?.cart);
  const pastOrders = useSelector(state => state?.pastOrders);
  const dispatch = useDispatch();
  const sum = () => {
    let total = 0;
    data?.forEach((item) => {
      total += item?.number
    })
    return total;
  }
  const placeOrder = () => {
    dispatch({ type: "PLACE_ORDER" });
    navigate(-1);
  }
  return (
    <div className='outerContainer'>
          <div className='container'>
        <div className='innerContainer'>
            <div className='left'>
            <div className='box1'
            onClick={() => navigate(-1)}
            >
             <img 
             src={arrowLeft}
             width={18}
             height={18}
             alt=''
             />
             </div>
             <div className='text'>Place Order</div>
            </div>
            <div className='right'>
                <div className='box1'>
             <img 
             src={message}
             width={17}
             height={17}
             alt=''
             />
             </div>
            </div>

        </div>
    </div>
    <div className='wrapper'>
    <div className='mainItems'>
    <Accordion
    name={'Current Order'}
    >
    <div className='boxContainer'>
      <CartItems 
      data={data}
      type={'current'}
      />
    </div>
      </Accordion>
      <Accordion
    name={'Previous Orders'}
    >
    <div className='boxContainer'>
    <CartItems 
      data={pastOrders}
      type={'past'}
    />
    </div>
      </Accordion>
    </div>
    </div>
    <div className='footer'>
     <div className='left'>
      {sum() > 0 ? `${sum()} Items` : '0 Item'}
     </div>
     <div className={`right ${data?.length === 0 && 'events'}`}
     onClick={() => placeOrder()}
     >
      PLACE ORDER
      <div className='img'>
      <img
      src={arrowRigfht}
      width={16}
      height={16}
      alt='' 
      />
      </div>
     </div>
    </div>
    </div>
  )
}

export default Cart
