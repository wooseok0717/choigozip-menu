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
import menu5 from '../../dist/assets/5.jpg';
import menu21 from '../../dist/assets/21.jpg';
import menu22 from '../../dist/assets/22.jpg';
import menu23 from '../../dist/assets/23.jpg';
import menu24 from '../../dist/assets/24.jpg';
import menu25 from '../../dist/assets/25.jpg';
import menu28 from '../../dist/assets/28.jpg';
import menu29 from '../../dist/assets/29.jpg';
import menu34 from '../../dist/assets/34.jpg';
import menu35 from '../../dist/assets/35.jpg';
import menu36 from '../../dist/assets/36.jpg';
import menu38 from '../../dist/assets/38.jpg';
import menu39 from '../../dist/assets/39.jpg';
import menu42 from '../../dist/assets/42.jpg';
import menu43 from '../../dist/assets/43.jpg';
import menu44 from '../../dist/assets/44.jpg';
import menu46 from '../../dist/assets/46.jpg';
import menu51 from '../../dist/assets/51.jpg';
import menu55 from '../../dist/assets/55.jpg';
import menu56 from '../../dist/assets/56.jpg';
import menu65 from '../../dist/assets/65.jpg';

const imgs = {
  65: menu65,
  56: menu56,
  55: menu55,
  51: menu51,
  46: menu46,
  44: menu44,
  43: menu43,
  42: menu42,
  39: menu39,
  38: menu38,
  36: menu36,
  35: menu35,
  34: menu34,
  29: menu29,
  28: menu28,
  25: menu25,
  24: menu24,
  23: menu23,
  22: menu22,
  21: menu21,
  5: menu5,
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