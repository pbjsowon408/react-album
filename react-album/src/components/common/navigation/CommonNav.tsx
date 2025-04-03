import { JSX, useEffect, useState } from 'react'
import styles from './CommonNav.module.scss'
import { Link } from 'react-router-dom';

interface Navigation{
    index: number,
    path: string,
    label: string,
    searchValue: string,
    isActive: boolean,
}

function CommonNav() {
    const [navigation, setNavigation] = useState<Navigation[]>([
        {
            index: 0,
            path: "/edit",
            label: "Edit & Upload",
            searchValue: "edit",
            isActive: false,
        },
        {
            index: 1,
            path: "/following",
            label: "Following",
            searchValue: "following",
            isActive: false,
        },
        {
            index: 2,
            path: "/photoPlus",
            label: "Unsplash Photo+",
            searchValue: "photo",
            isActive: false,
        },
        {
            index: 3,
            path: "/oneColor",
            label: "Single color",
            searchValue: "one color",
            isActive: false,
        },
        {
            index: 4,
            path: "/3dRender",
            label: "3D Rendering",
            searchValue: "3d rendering",
            isActive: false,
        },
        {
            index: 5,
            path: "/nature",
            label: "Nature",
            searchValue: "nature",
            isActive: false,
        },
        {
            index: 6,
            path: '/search/texture',
            label: 'Texture & Pattern',
            searchValue: 'texture',
            isActive: false,
        },
        {
            index: 7,
            path: '/search/interior',
            label: 'Interior',
            searchValue: 'interior',
            isActive: false,
        },
        {
            index: 8,
            path: '/search/film',
            label: 'Film',
            searchValue: 'film',
            isActive: false,
        },
        {
            index: 9,
            path: '/search/experimental',
            label: 'Experimental',
            searchValue: 'experimental',
            isActive: false,
        },
        {
            index: 10,
            path: '/search/travel',
            label: 'Travel',
            searchValue: 'travel',
            isActive: false,
        },
        {
            index: 11,
            path: '/search/sports',
            label: 'Sports',
            searchValue: 'sports',
            isActive: false,
        }
    ]);

    // const feature = (): JSX.Element[] => {
    //     const navLinks = navigation.map((item: Navigation) => {
    //         return (
    //         <div className={styles.navigation__menu} key={item.index}>
    //             <span className={styles.navigation__menu__label}>{item.label}</span>
    //         </div>
    //         );
    //     });
    //     return navLinks;
    // };

    const navLinks = navigation.map((item: Navigation) => {
        return (
        <Link to={item.path} className={styles.navigation__menu} key={item.index}>
            <span className={styles.navigation__menu__label}>{item.label}</span>
        </Link>
        );
    });

  return (
    <div className={styles.navigation}>
        {navLinks}
    </div>
  );
};

export default CommonNav;