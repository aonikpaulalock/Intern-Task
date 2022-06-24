import React from 'react';
import RatingCard from './RatingCard';

const TeachersReviews = () => {
  return (
    <div className='flex items-center mb-3'
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1400"
    data-aos-delay="1500"
    >
      <RatingCard/>
      <h1 className='ml-4 text-gray-500 font-medium'>407 Total Reviews for the teachers</h1>
    </div>
  );
};

export default TeachersReviews;