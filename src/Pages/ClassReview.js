import React from 'react';
import RatingCard from './RatingCard';

const ClassReview = () => {
  return (
    <div className='flex items-center '
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1800"
    data-aos-delay="1000"
    >
    <RatingCard />
    <h1 className='ml-4 text-gray-500 font-medium'>5 Reviews for the Class</h1>
  </div>
  );
};

export default ClassReview;