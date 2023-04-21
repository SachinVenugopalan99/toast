import React, { useState } from 'react';
import Header from '../../components/header/header';
import {tabs} from '../../constants/constants'
import Footer from '../../components/footer/footer';
import SpecialTab from '../../components/special/specialTab';
import MainTab from '../../components/mainTab/mainTab';
import './styles.scss'

const Home = () => {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const onTabSelect = (tab) => {
        setSelectedTab(tab);
    }
    const section = () => {
        switch(selectedTab) {
            case 'Special':
                return (
                    <SpecialTab />
                )
            case 'Main': 
               return (
                <div>
                   <MainTab />
                </div>
               )
               default:
                return (
                    <div>
                    <MainTab />
                 </div>
                )
        }
    }
  return (
    <div className='outerContainer'>
     <Header 
     selectedTab={selectedTab}
     onTabSelect={onTabSelect}
     />
     <div className='wrapper'>
        {section()}
     </div>
     <Footer 
     selectedTab={selectedTab}
     />
    </div>
  )
}

export default Home
