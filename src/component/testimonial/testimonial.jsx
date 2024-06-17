import React from 'react';
import './testimonial.css';
import AVTR1 from '../../asests/avatar1.jpg';
import AVTR2 from '../../asests/avatar2.jpg';
import AVTR3 from '../../asests/avatar3.jpg';
import AVTR4 from '../../asests/avatar4.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';



const data = [
  {
    avatar: AVTR1,
    name: 'Lisa bao',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellat, veniam itaque, perferendis nihil adipisci rem doloremque cumque odit veritatis alias voluptate obcaecati. Reiciendis quo adipisci ab deleniti neque qui.'
  },
  {
    avatar: AVTR2,
    name: 'Lisa bao',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellat, veniam itaque, perferendis nihil adipisci rem doloremque cumque odit veritatis alias voluptate obcaecati. Reiciendis quo adipisci ab deleniti neque qui.'
  },
  {
    avatar: AVTR3,
    name: 'Lisa bao',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellat, veniam itaque, perferendis nihil adipisci rem doloremque cumque odit veritatis alias voluptate obcaecati. Reiciendis quo adipisci ab deleniti neque qui.'
  },
  {
    avatar: AVTR4,
    name: 'Lisa bao',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellat, veniam itaque, perferendis nihil adipisci rem doloremque cumque odit veritatis alias voluptate obcaecati. Reiciendis quo adipisci ab deleniti neque qui.'
  },
];

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from clients</h5>
      <h2>testimonial</h2>

   

      <div className="container testimonial__container">
      <Swiper 
      // pagination={true}
      grabCursor={true}
        pagination={{
          clickable: true,
        }}
       modules={[Pagination]}
        className="mySwiper">
      {data.map(({ avatar, name, review }, index) => (
        <SwiperSlide key={index} className='testimonial'>
          <div className="client__avatar">
            <img src={avatar} alt="" />
          </div>
          <h5 className='client__name'>{name}</h5>
          <small className='client__review'>{review}</small>
        </SwiperSlide>
      ))}
      </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
