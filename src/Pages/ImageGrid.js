import React from 'react';

const ImageGrid = ({data}) => {
  return (
    <div className=' ease-in duration-1000 hover:scale-105 hover:translate-x-3 cursor-pointer'>
      <div className='grid grid-cols-6 grid-rows-2 gap-3'>
        <div className='col-span-4 row-span-6' >
          <img src={data.image[0].img1} alt="" className='rounded-tl-md' />
        </div>
        <div className='col-span-2 row-span-2'>
          <img src={data.image[0].img2} alt="" className='rounded-tr' />
        </div>
        <div className='col-span-2 row-span-4'>
          <img src={data.image[0].img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;