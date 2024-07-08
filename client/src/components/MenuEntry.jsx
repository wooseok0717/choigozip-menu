import React from 'react';
import {capitalize} from './helperfn';
import menu2 from '../../dist/assets/2.jpg';
import menu26 from '../../dist/assets/26.jpg';
import menu7 from '../../dist/assets/7.jpg';
import menu31 from '../../dist/assets/31.jpg';
import menu48 from '../../dist/assets/48.jpg';
import menu41 from '../../dist/assets/41.jpg';

const imgs = {
  41: menu41,
  48: menu48,
  31: menu31,
  7: menu7,
  26: menu26,
  2: menu2
}

const MenuEntry = ({menu, lang}) => {

  return (
    <div className='menu-container'>
      <div className='img-container'>
        <img src={menu.img_url}/>
        {/* {console.log(menu.id)} */}
        <img src={imgs[menu.id]}/>
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