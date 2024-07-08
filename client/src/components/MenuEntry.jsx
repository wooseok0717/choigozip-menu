import React from 'react';
import {capitalize} from './helperfn';
import menu2 from '../../dist/assets/2.jpg';
import menu26 from '../../dist/assets/26.jpg';
import menu7 from '../../dist/assets/7.jpg';
import menu31 from '../../dist/assets/31.jpg';
import menu48 from '../../dist/assets/48.jpg';
import menu41 from '../../dist/assets/41.jpg';
import menu4 from '../../dist/assets/4.jpg';
import menu27 from '../../dist/assets/27.jpg';
import menu32 from '../../dist/assets/32.jpg';
import menu33 from '../../dist/assets/33.jpg';
import menu40 from '../../dist/assets/40.jpg';
import menu45 from '../../dist/assets/45.jpg';
import menu47 from '../../dist/assets/47.jpg';
import menu54 from '../../dist/assets/54.jpg';
import menu62 from '../../dist/assets/62.jpg';
import menu63 from '../../dist/assets/63.jpg';
import menu64 from '../../dist/assets/64.jpg';

const imgs = {
  64: menu64,
  63: menu63,
  62: menu62,
  54: menu54,
  47: menu47,
  45: menu45,
  40: menu40,
  33: menu33,
  32: menu32,
  27: menu27,
  4: menu4,
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