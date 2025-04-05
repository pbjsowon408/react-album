import styles from './CommonFooter.module.scss'

function CommonFooter() {
  return (
    <div className={styles.footer}>
        <div className={styles.pagenation}>
            <button className={styles.pagenation__button}>
                <img src='./src/assets/icons/icon-arrowLeft.svg' alt=''/>
            </button>
            {/** TODO: changing UI for future*/}
            <span>
                1
            </span>
            <button className={styles.pagenation__button}>
                <img src='./src/assets/icons/icon-arrowLeft.svg' alt=''/>
            </button>
        </div>
    </div>
  )
}

export default CommonFooter