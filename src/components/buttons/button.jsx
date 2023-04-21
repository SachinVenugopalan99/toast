import React from 'react';
import plus from '../../assets/plus.png';
import minus from '../../assets/minus.png'
import './styles.scss'

const Button = (props) => {
  const {addItem, deleteItem, isItem, number} = props
  return (
    <>
    {isItem ? (
      <>
      <button className='addButton'>
      <div>
      <div className='buttonContainer'
      onClick={deleteItem}
      >
        <img
        src={minus}
        width={10}
        height={1.5}
        alt=''
        />
        </div>
        </div>
        <div>
          {number}
        </div>
        <div>
      <div className='buttonContainer'
            onClick={addItem}
      >
        <img
        src={plus}
        width={10}
        height={10}
        alt=''
        />
        </div>
        </div>
      </button>
      </>
      ): (
        <>
        <button className='buttonBox'
          onClick={addItem}
        >
        <div className='buttonContainer'>
        <img
        src={plus}
        width={10}
        height={10}
        alt=''
        />
        </div>
        <div className='buttonText'>
          ADD
        </div>
      </button>
      </>
      )}
       </>
  )
}

export default Button