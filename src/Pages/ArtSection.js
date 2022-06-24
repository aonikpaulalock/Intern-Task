import React, { useEffect, useState } from 'react';
import CardSection from './CardSection';
import RatingCard from './RatingCard';

const ArtSection = () => {
  const [sections, setSections] = useState([])
  useEffect(() => {
    fetch("image.json")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setSections(data)
      })
  }, [])
  return (
    <div className='sm:px-14 px-6'>
      <div className='leading-10 mb-8 py-4'>
        <h1 className="font-bold text-4xl text-gray-700 leading-tight">Summer Art Camp ! 5 Days of Artist and Painting Monet , Ven Gogh,Matissc & More</h1>
        <h3 className="text-gray-400 font-semibold flex items-center">Multi Days Course
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </h3>
      </div>
      <div>
        {
          sections.map(section => <CardSection
            key={section.id}
            data={section}
          ></CardSection>)
        }
      </div>
    </div>
  );
};

export default ArtSection;