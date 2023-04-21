import React from 'react';
import DishCard from '../dishCard/dishCard';
// import  {defaultState}  from '../../redux/store/store';
import { useSelector } from "react-redux";
import Accordion from '../accordion/accordion';
import './styles.scss'

const MainTab = () => {
  const data = useSelector(state => state?.listData);
  return (
    <div className='mainItems'>
    <Accordion
    name={'Acai bowls'}
    >
    <div className='boxContainer'>
    {data?.map((item, index) => 
    <DishCard 
    item={item}
    />
    )}
    </div>
      </Accordion>
    </div>
  )
}

export default MainTab;
