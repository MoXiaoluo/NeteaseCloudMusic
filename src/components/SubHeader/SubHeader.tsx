import { Link } from 'react-router-dom';

type subHeaderProps = {
  children?: JSX.Element;
};

type itemProps = {
  title: string;
  key: string;
  link: string;
};
const items: itemProps[] = [
  {
    title: '华语',
    key: 'key1',
    link: '',
  },
  {
    title: '流行',
    key: 'key2',
    link: '',
  },
  {
    title: '摇滚',
    key: 'key3',
    link: '',
  },
  {
    title: '民谣',
    key: 'key4',
    link: '',
  },
  {
    title: '电子',
    key: 'key5',
    link: '',
  },
];

const SubHeader = (props: subHeaderProps) => {
  return (
    <>
      <div className='flex w-[982px] mx-auto justify-between border-0 border-b-2 border-solid border-[#C10D0C]'>
        <div className='flex'>
          <div
            className=' bg-common-icon pr-[10px] pl-[34px] h-[33px]'
            style={{ backgroundPosition: '-225px -156px' }}
          >
            <Link
              to=''
              className=' no-underline leading-[33px] text-[20px] text-black'
            >
              热门推荐
            </Link>
          </div>
          <ul className='flex list-none leading-[33px] m-0'>
            {items.map((item, index) => {
              return (
                <li key={item.key}>
                  <Link
                    to={item.link}
                    className=' no-underline text-black text-[12px]'
                  >
                    {item.title}
                  </Link>
                  {items.length - 1 != index && (
                    <span className=' mx-4'>|</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className='leading-[33px]'>
          <Link to='' className='text-[12px] text-black no-underline'>
            更多
          </Link>
          <i
            className=' bg-common-icon w-6 h-6 inline-block align-bottom ml-2'
            style={{ backgroundPosition: '0 -240px' }}
          ></i>
        </div>
      </div>
      {props.children}
    </>
  );
};

export default SubHeader;
