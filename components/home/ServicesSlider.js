import React from 'react'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import serimg1 from '../../public/ser1.png'
import serimg2 from '../../public/ser2.png'
import serimg3 from '../../public/ser3.png'
import serimg4 from '../../public/ser4.png'
import serimg5 from '../../public/ser5.png'
import serimg6 from '../../public/ser6.png'
import serimg7 from '../../public/ser7.png'
import Image from 'next/image';
const servicesBox = [
    { 
      key:1,
      servicesBox_img:serimg1,
      servicesBox_hdng:"القضايا الجزائية"
    },
    { 
      key:2,
      servicesBox_img:serimg2,
      servicesBox_hdng:"القضايا العمالية"
    },
    { 
      key:3,
      servicesBox_img:serimg3,
      servicesBox_hdng:"القضايا الأسرية"
    },
    { 
      key:4,
      servicesBox_img:serimg4,
      servicesBox_hdng:"صياغة العقود"
    },
    { 
      key:5,
      servicesBox_img:serimg5,
      servicesBox_hdng:"تسوية النزاعات"
    },
    { 
      key:6,
      servicesBox_img:serimg6,
      servicesBox_hdng:"المنازعات العقارية"
    },
    { 
      key:7,
      servicesBox_img:serimg7,
      servicesBox_hdng:"الاستشارات القانونية"
    },
]
const ServicesSlider = () => {
    return (
        <div className="servicesWrapper servicesWrapper2">
            <h1 className="hdng">نقدم لك خبرة
             <span className="red"> 20 </span>
             عاماً
            </h1>
            <div className="servicesSliderwrapper">
            <Swiper
              modules={[Navigation, Pagination]}
              className="servicesSlider"
              slidesPerView={5}
              navigation={true}
              pagination={false}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                540: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 5,
                }
              }}
            >
              {servicesBox.map(({servicesBox_img,servicesBox_hdng},a) =>
                <SwiperSlide key={a}>
                  <div className="servicesBox">
                      <div className="servicesBox_holder">
                          <Image src={servicesBox_img} width="64" height="65" alt="services" className='servicesBox_img' />
                      </div>
                      <h1 className="servicesBox_hdng">{servicesBox_hdng}</h1>
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
            </div>
          </div>
    )
}

export default ServicesSlider