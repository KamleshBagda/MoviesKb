import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectCube, Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';






export const SwiperSlider = (props) => {

  return (
    <div className="container-fluid p-0 my-3">
      <Swiper
        style={{
          '--swiper-navigation-size': '25px',
          '--swiper-navigation-top-offset': ' 50%',
          '--swiper-navigation-sides-offset': '10px',
          '--swiper-navigation-color': '#F8FFDB'
        }}
        modules={[Navigation, EffectCube, A11y, Autoplay, Mousewheel]}
        // mousewheel={true}
        spaceBetween={30}
        slidesPerView={1}

        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        navigation
        breakpoints={{
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}

      // pagination={{ clickable: true }}
      >
        {/* <SwiperSlide><img src={props?.data0.imag} alt="" className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={props?.data1.imag} alt="" className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={props?.data2.imag} alt="" className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={props?.data3.imag} alt="" className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={props?.data4.imag} alt="" className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={props?.data5.imag} alt="" className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={props?.data6.imag} alt="" className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={props?.data7.imag} alt="" className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={props?.data8.imag} alt="" className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={props?.data9.imag} alt="" className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={props?.data10.imag} alt="" className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={props?.data11.imag} alt="" className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={props?.data12.imag} alt="" className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={props?.data13.imag} alt="" className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={props?.data14.imag} alt="" className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={props?.data15.imag} alt="" className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={props?.data16.imag} alt="" className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={props?.data17.imag} alt="" className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={props?.data18.imag} alt="" className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={props?.data19.imag} alt="" className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={props?.data20.imag} alt="" className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={props?.data21.imag} alt="" className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={props?.data22.imag} alt="" className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={props?.data23.imag} alt="" className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={props?.data24.imag} alt="" className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={props?.data25.imag} alt="" className='img-fluid' /></SwiperSlide>
        <SwiperSlide><img src={props?.data26.imag} alt="" className='img-fluid' /></SwiperSlide> */}


        {
          Slider1Data[0].map((e, i) => (
            <SwiperSlide key={i}><img src={e.imag} alt={`Slide ${i + 1}`} className='img-fluid' /></SwiperSlide>
          ))
        }

      </Swiper>
    </div>

  )
}