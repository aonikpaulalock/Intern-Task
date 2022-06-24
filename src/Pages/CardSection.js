import React from 'react';
import RatingCard from './RatingCard';
import user from "../Asset/User/people3.png"
import TeachersReviews from './TeachersReviews';
import ClassReview from './ClassReview';
import ImageGrid from './ImageGrid';
import ButtonGroup from './ButtonGroup';
const CardSection = ({ data }) => {
  return (
    <div>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
        <div className=''>
          <h1 className="text-gray-800 font-medium p-2">{data.des}</h1>
          <div className='flex items-center mb-4 mt-2'>
            <img src={user} alt="" className='w-10' />
            <h1 className="text-indigo-600 font-medium ml-4">Kimberly R Moseler</h1>
          </div>
          <TeachersReviews />
          <ClassReview />
          <h1 className='my-2 font-medium text-gray-800 leading-10'>Compleated by 21 Learners</h1>
          <ButtonGroup/>
        </div>
        <ImageGrid data={data}/>
  
      </div>
    </div>
  );
};

export default CardSection;