import styles from "./CommonSearchBar.module.scss";

function CommonSeachBar() {
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar__search}>
        <input
          type="text"
          placeholder="Search for photo"
          className={styles.searchBar__search__input}
        ></input>
        <img src="./src/assets/icons/icon-search.svg" alt="" />
      </div>
    </div>
  );
}

export default CommonSeachBar;
