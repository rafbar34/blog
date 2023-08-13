import Link from 'next/link';
import styles from '../../styles/navigator/navigator.module.css';
import {useRouter} from 'next/router';
import logo from '../../assets/images/LogoRaccoon.png';
type NavigatorType = {
  children: React.ReactNode;
};

export const Navigator = (props: NavigatorType) => {
  const navigators = [
    {
      title: 'Logo',
      img: 'https://cdn.pixabay.com/photo/2016/07/11/20/08/raccoon-1510501_1280.png',
      route: '/',
    },
    {
      title: 'All Posts',
      img: null,
      route: '/posts',
    },
    {
      title: 'Dinners',
      img: null,
      route: '/posts/dinner',
    },
    {
      title: 'Breakfasts',
      img: null,
      route: '/posts/breakfast',
    },
    {
      title: 'Lunches',
      img: null,
      route: '/posts/lunch',
    },
    // {
    //   title: 'Contact',
    //   img: null,
    //   route: '/contact',
    // },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.navBox}>
        <div className={styles.navigators}>
          {navigators.map((navigator) => (
            <Link
              href={navigator.route}
              className={styles.navigator}>
              {navigator.img !== null ? (
                <img
                  height={35}
                  width={35}
                  alt='logo'
                  src={navigator.img}
                />
              ) : (
                navigator.title
              )}
            </Link>
          ))}
        </div>
      </div>
      <div>{props.children}</div>
    </div>
  );
};
