import React from 'react';
import cafe_icon from '../../assets/cafe_icon.png';
import top_icon from '../../assets/top_icon.png';
import top_right from '../../assets/top_right.png';
import {tabs} from '../../constants/constants'
import './styles.scss';

const Header = (props) => {

    const {selectedTab, onTabSelect} = props;
  return (
    <div className='container'>
        <div className='innerContainer'>
            <div className='left'>
             <img 
             src={cafe_icon}
             width={28}
             height={28}
             alt=''
             />
             <div className='text'>Sacred Earth Cafe</div>
            </div>
            <div className='right'>
                <div className='box1'>
             <img 
             src={top_icon}
             width={18}
             height={18}
             alt=''
             />
             </div>
             <div className='box2'>
            <img 
             src={top_right}
             width={16}
             height={16}
             alt=''
             />
             </div>
            </div>

        </div>
        <div className='tabs'>
            {tabs?.map((item, index) => 
                <div className={`item ${selectedTab === item && 'selectedTab'}`}
                key={index}
                onClick={() => onTabSelect(item)}
                >
                    {item}
                </div>
            )}
        </div>
    </div>
  )
}

export default Header;
