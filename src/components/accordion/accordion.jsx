import React, {useState} from 'react';
import close from '../../assets/close.png';
import './styles.scss';

const Accordion = (props) => {
    const { children, name } = props;
    const [isOpen, setIsOpen] = useState(true);
  return (
    <div className='accordionWrapper'>
        <div className='accordion'
        onClick={() => setIsOpen(!isOpen)}
        >
            <div className='name'>
            {name} 
            </div>
            <div className='line'>

            </div>
            <div className={`arrow ${!isOpen && 'rotateArrow'}`}>
            <img 
            src={close}
            width={8}
            height={5}
            alt=''
            />
            </div>
        </div>
        {isOpen && (
        <div className='children'>
        {children}
        </div>
        )}
    </div>
  )
}

export default Accordion
