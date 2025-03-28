import styles from './styles/index.module.scss'

function index() {
    return(
        <div className={styles.page}>
            Main Page
            {/** 공통 헤더 UI 파트*/}
            {/** 공통 네비게이션 UI 파트 */}
            <div className={styles.page__contents}>
                <div className={styles.page__contents__introBox}>
                    <div className={styles.wrapper}>
                        <span className={styles.wrapper__title}>PhotoSplash</span>
                        <span className={styles.wrapper__desc}>
                            It is an Album that gives splash of photo. <br/>
                            Enjoy!
                        </span>
                        {/** 검색창 UI 파트 */}
                    </div>
                </div>
                <div className={styles.page__contents__imageBox}>
                </div>
            </div>
            {/** 공통 footer UI 파트 */}
        </div>
    );
};

export default index;