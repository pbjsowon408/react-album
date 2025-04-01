import CommonHeader from '@/components/common/header/CommonHeader';
import CommonSeachBar from '@/components/common/searchBar/CommonSearchBar';
import styles from './styles/index.module.scss'

function index() {
    return(
        <div className={styles.page}>
            {/** Common Header UI Part*/}
            <CommonHeader/>
            {/** Common Navigation UI Part */}
            <div className={styles.page__contents}>
                <div className={styles.page__contents__introBox}>
                    <div className={styles.wrapper}>
                        <span className={styles.wrapper__title}>Photo Album</span>
                        <span className={styles.wrapper__desc}>
                            It is an Album that gives splash of photo. <br/>
                            Enjoy!
                        </span>
                        {/** SearchBar UI Part */}
                        <CommonSeachBar/>
                    </div>
                </div>
                <div className={styles.page__contents__imageBox}>
                </div>
            </div>
            {/** Common Footer UI Part (Pagenation)*/}
        </div>
    );
};

export default index;