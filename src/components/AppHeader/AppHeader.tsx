import { Input } from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';

type menuProps = {
  title: string;
  link: string;
  key: string;
  selected: boolean;
};

const menuItems: menuProps[] = [
  {
    title: '发现音乐',
    link: '',
    key: 'key1',
    selected: true,
  },
  {
    title: '我的音乐',
    link: '',
    key: 'key2',
    selected: false,
  },
  {
    title: '关注',
    link: '',
    key: 'key3',
    selected: false,
  },
  {
    title: '商城',
    link: '',
    key: 'key4',
    selected: false,
  },
  {
    title: '音乐人',
    link: '',
    key: 'key5',
    selected: false,
  },
  {
    title: '下载客户端',
    link: '',
    key: 'key6',
    selected: false,
  },
];

const subMenu: menuProps[] = [
  {
    title: '推荐',
    link: '',
    key: 'key1',
    selected: true,
  },
  {
    title: '排行榜',
    link: '',
    key: 'key2',
    selected: false,
  },
  {
    title: '歌单',
    link: '',
    key: 'key3',
    selected: false,
  },
  {
    title: '主播电台',
    link: '',
    key: 'key4',
    selected: false,
  },
  {
    title: '歌手',
    link: '',
    key: 'key5',
    selected: false,
  },
  {
    title: '新碟上架',
    link: '',
    key: 'key6',
    selected: false,
  },
];

const AppHeader = () => {
  return (
    <header>
      <div className=' flex justify-around  bg-bg-black-24 min-w-[1100px]'>
        <div className='flex'>
          <Link to='' className='w-[157px] h-full pr-5 -indent-[9999px]'>
            <h1 className='w-[176px] h-[69px] bg-left-top bg-app-logo mb-0'></h1>
          </Link>

          <ul className='flex m-0 p-0 list-none ml-5 text-center'>
            {menuItems.map((item) => {
              return (
                <li key={item.key} className=' relative'>
                  <Link
                    to={item.link}
                    className={`${
                      item.selected ? 'bg-black' : ''
                    } block no-underline  hover:bg-black`}
                  >
                    <span className=' text-white h-[70px] leading-[70px] text-[14px] px-5'>
                      {item.title}
                    </span>
                    {item.selected && (
                      <sub
                        className='block bg-app-logo absolute left-2/4 top-16 w-3 h-[7px] -ml-2'
                        style={{ backgroundPosition: '-226px 0' }}
                      ></sub>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='flex text-white h-[70px] '>
          <div className=' pr-4 leading-[70px]'>
            <Input
              size='small'
              placeholder='音乐/视频/电台/用户'
              prefix={<SearchOutlined />}
              className=' rounded-2xl'
            />
          </div>
          <div className=' pr-4'>
            <Link
              to=''
              className='block border border-solid border-[#4F4F4F] rounded-2xl leading-[33px] text-[#ccc] mt-4 text-[12px] w-24 text-center'
            >
              创作者中心
            </Link>
          </div>
          <div className=' pr-4 leading-[70px]'>
            <Link to='' className='text-[#787878] text-[12px]'>
              搜索
            </Link>
          </div>
        </div>
      </div>
      <div className=' h-[5px] box-border bg-red-700 hidden'></div>
      <div className=' h-[35px] box-border bg-red-700 w-full leading-[35px]'>
        <div className='w-[1100px] my-0 mx-auto'>
          <ul className='flex list-none justify-start  text-[12px]'>
            {subMenu.map((item) => {
              return (
                <li className=' mx-8' key={item.key}>
                  <Link to={item.link} className=' no-underline text-white'>
                    <span
                      className={`${
                        item.selected ? 'bg-[#9B0909]' : ''
                      } inline-block h-5 px-[13px] leading-5 rounded-2xl hover:bg-[#9B0909]`}
                    >
                      {item.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
