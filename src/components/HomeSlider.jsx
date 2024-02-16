// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function HomeSlider() {
  return (
    <>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="/img/banner.png" alt="product banner"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/banner.png" alt="product banner"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/banner.png" alt="product banner"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/banner.png" alt="product banner"/>
      </SwiperSlide>
    </Swiper>
  </>
  )
}
