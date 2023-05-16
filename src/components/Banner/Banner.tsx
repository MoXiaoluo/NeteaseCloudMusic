import { useEffect, useRef, useState } from 'react';
import { getBanner } from '../../server/homePage/banner';
import { Carousel } from 'antd';
import { bannerType } from '../../Type/requestType';
import { CarouselRef } from 'antd/es/carousel';

const Banner = () => {
  const [banners, setBanners] = useState<bannerType[]>([]);
  const [bgImage, setBgImage] = useState('');
  //   const [currentIndex, setCurrentIndex] = useState(0);
  const bannerRef = useRef<CarouselRef>(null);
  useEffect(() => {
    getBanner().then((res) => {
      console.log(res.data.banners);
      setBanners(res.data.banners);
    });
  }, []);

  const beforeChange = (_from: number, to: number) => {
    setBgImage(`${banners[to].imageUrl}?imageView&blur=40x20`);
  };

  const prevLink = () => {
    bannerRef.current?.prev();
  };

  const nextLink = () => {
    bannerRef.current?.next();
  };

  return (
    <div
      className='w-full h-[285px] bg-center bg-no-repeat'
      style={{ backgroundImage: `url('${bgImage}')`, backgroundSize: '6000px' }}
    >
      <div className='w-[982px] h-[285px] mx-auto relative'>
        <a
          className='absolute block top-1/2 -left-20 w-[37px] h-[63px] -mt-[31px] bg-banner-icon cursor-pointer'
          style={{ backgroundPosition: '0 -360px' }}
          onClick={prevLink}
        ></a>
        <Carousel
          autoplay
          effect='fade'
          beforeChange={beforeChange}
          ref={bannerRef}
        >
          {banners &&
            banners.map((item) => {
              return (
                <img
                  src={item.imageUrl}
                  alt=''
                  className='w-[730px] h-[285px]'
                  key={item.targetType}
                />
              );
            })}
        </Carousel>
        <a
          className=' absolute block top-1/2  -right-20 w-[37px] h-[63px] -mt-[31px] bg-banner-icon cursor-pointer'
          style={{ backgroundPosition: '0 -508px' }}
          onClick={nextLink}
        ></a>
      </div>
    </div>
  );
};

export default Banner;
