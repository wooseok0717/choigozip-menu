import React from 'react';
import {capitalize} from './helperfn';

const MenuEntry = ({menu, lang}) => {

  return (
    <div className='menu-container'>
      <div className='img-container'>
        <img src={menu.img_url}/>
      </div>
      <div className='menu-name'>
        <span>
          {lang === 'kor' ? menu.kor_name : capitalize(menu.eng_name)}
        </span>
        <span>
          {'$' + menu.price}
        </span>
      </div>
      <div className='menu-details'>
        {lang === 'kor' ? menu.kor_details : capitalize(menu.eng_details)}
      </div>
    </div>
  )
}

export default MenuEntry;