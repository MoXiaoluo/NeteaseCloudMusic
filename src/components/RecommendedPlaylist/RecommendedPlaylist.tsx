import React, { useEffect, useState } from 'react';
import SubHeader from '../SubHeader/SubHeader';
import { getRecommendPlayList } from '../../server/homePage/playList';
import { playListType } from '../../Type/requestType';
import Album from '../Album/Album';

const RecommendedPlaylist = () => {
  const [playList, setPlayList] = useState<playListType[]>([]);
  useEffect(() => {
    getRecommendPlayList().then((res) => {
      console.log(res.data.result);
      setPlayList(res.data.result);
    });
  }, []);
  return (
    <SubHeader>
      <div className='flex flex-wrap w-[982px] justify-around mx-auto'>
        {playList &&
          playList.slice(0, 8).map((item) => {
            return (
              <Album title={item.name} src={item.picUrl} key={item.id}></Album>
            );
          })}
      </div>
    </SubHeader>
  );
};

export default RecommendedPlaylist;
