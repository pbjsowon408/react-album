import CommonHeader from '@/components/common/header/CommonHeader';
import CommonSeachBar from '@/components/common/searchBar/CommonSearchBar';
import CommonNav from '@/components/common/navigation/CommonNav';
import CommonFooter from '@/components/common/footer/CommonFooter';
import Card from './components/Card';
//CSS
import styles from './styles/index.module.scss'

function index() {
    return(
        <div className={styles.page}>
            {/** Common Header UI Part*/}
            <CommonHeader/>
            {/** Common Navigation UI Part */}
            <CommonNav/>
            <div className={styles.page__contents}>
                <div className={styles.page__contents__introBox}>
                    <div className={styles.wrapper}>
                        <span className={styles.wrapper__title}>Photo Album</span>
                        <span className={styles.wrapper__desc}>
                            It is an Album that gives splash of photo. <br/>
                            by Eddie.
                        </span>
                        {/** SearchBar UI Part */}
                        <CommonSeachBar/>
                    </div>
                </div>
                <div className={styles.page__contents__imageBox}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
            {/** Common Footer UI Part (Pagenation)*/}
            <CommonFooter/>
        </div>
    );
};

export default index;