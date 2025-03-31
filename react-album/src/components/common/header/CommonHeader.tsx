import styles from './CommonHeader.module.scss'

function CommonHeader() {
  return (
    <div className={styles.header}>
        <div className={styles.header__logoBox}>
            <img className={styles.header__logoBox__logo} src='src/assets/image/image-logo.png' alt=''/>
            <span className={styles.header__logoBox__title}>Photo Album</span>
        </div>
        <div className={styles.header__profileBox}>
            <button className={styles.header__profileBox__button}>Upload</button>
            <button className={styles.header__profileBox__button}>Bookmark</button>
            <span className={styles.header__profileBox__userName}>Eddie Park | https://github.com/pbjsowon408</span>
        </div>
    </div>
  )
}

export default CommonHeader