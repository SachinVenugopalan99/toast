import React from 'react';
import banner from '../../assets/banner.png'
import Accordion from '../accordion/accordion';
import MenuCard from '../menuCard/menuCard';
import { useSelector } from "react-redux";
import './styles.scss'

const SpecialTab = () => {
  const data = useSelector(state => state?.listData);
  return (
    <div className='wrapperContainer'>
      <div className='imgContainer'>
        <img
        src={banner}
        className='image' 
        alt=''
        />
        <div className='imgText'>
        Welcome to Sacred Earth Cafe
        </div>
        </div>
        <div>
        <Accordion
        name={'Today’s Special'}
        >
        <div className='boxContainer'>
        {data?.map((item, index) => 
        <MenuCard 
        item={item}
        />
        )}
        </div>
          </Accordion>
        </div>
    </div>
  )
}

export default SpecialTab;
