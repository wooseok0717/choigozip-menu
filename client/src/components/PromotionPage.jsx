import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PromoEntry from './PromoEntry.jsx';

const PromotionPage = ({closeModal}) => {

  const [promoList, setPromoList] = useState([]);

  const loadActivePromos = () => {
    axios.get('/api/activePromos')
    .then(({data}) => setPromoList(data));
  }

  useEffect(() => {
    loadActivePromos();
  },[])

  if (promoList.length === 0) {
    return (
      <></>
    )
  }

  return (
    <>
      <div className='modal'>
        <div className='modal-content'>
          <div className='modal-body'>
            {promoList.map((promo, ind) => <PromoEntry key={ind} promo={promo}/>)}
          </div>
        </div>
      </div>
    </>
  )
}

export default PromotionPage;