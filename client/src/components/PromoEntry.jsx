import React, { useState } from 'react';
import {capitalize} from './helperfn';

const PromoEntry = ({promo, language}) => {
  // console.log(promo);
  return (
    <>
      <h3 className='promo-title'>{language === 'kor' ? promo.kor_title : capitalize(promo.eng_title)}</h3>
      <img src={promo.url} />
      <div className='promo-details'><span>{language === 'kor' ? promo.kor_details : capitalize(promo.eng_details)}</span></div>
    </>
  )
}

export default PromoEntry;