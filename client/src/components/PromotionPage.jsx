import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import PromoEntry from './PromoEntry.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const PromotionPage = ({closeModal}) => {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

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
          <div className='modal-header'><span className='close-btn' onClick={closeModal}>CLOSE</span></div>
          <div className='modal-body'>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
          >
            {promoList.map((promo, ind) => (
             <SwiperSlide key={ind}><PromoEntry promo={promo}/></SwiperSlide>
            ))}
            <div className="autoplay-progress" slot="container-end">
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

export default PromotionPage;