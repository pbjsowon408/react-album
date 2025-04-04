import { useState } from 'react'
import styles from './CommonNav.module.scss'
import { Link } from 'react-router-dom'
import navDummyData from './navDummyData.json'

interface Navigation{
    index: number,
    path: string,
    label: string,
    searchValue: string,
    isActive: boolean,
}

function CommonNav() {
    const [navigation, setNavigation] = useState<Navigation[]>(navDummyData);

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