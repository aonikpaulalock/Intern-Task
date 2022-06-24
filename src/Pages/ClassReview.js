import React from 'react';
import RatingCard from './RatingCard';

const ClassReview = () => {
  return (
    <div className='flex items-center '>
    <RatingCard />
    <h1 className='ml-4 text-gray-500 font-medium'>5 Reviews for the Class</h1>
  </div>
  );
};

export default ClassReview;