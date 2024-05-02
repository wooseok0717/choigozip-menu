import React, { useState } from 'react';

const PromoEntry = ({promo}) => {
  console.log(promo);
  return (
    <>
      <h3 className='promo-title'>{promo.kor_title}</h3>
      <img src={promo.url} />
      <div className='promo-details'><span>{promo.kor_details}</span></div>
    </>
  )
}

export default PromoEntry;