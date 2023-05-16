import React from 'react';
import { Link } from 'react-router-dom';

type AlbumProps = {
  title: string;
  src: string;
};

const Album = (props: AlbumProps) => {
  return (
    <div className='w-[140px] h-[204px] m-8'>
      <div className='w-[140px] h-[140px] relative'>
        <Link to='' className=' block' title={props.title}>
          <img src={`${props.src}?param=140y140`} alt='' />
        </Link>
      </div>
      <div>
        <Link
          to=''
          className='text-[14px] no-underline text-black'
          title={props.title}
        >
          {props.title}
        </Link>
      </div>
    </div>
  );
};

export default Album;
