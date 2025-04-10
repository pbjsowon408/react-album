import styles from "./Card.module.scss";

function Card() {
  const openDialogClick = () => {
    console.log("openDialog");
  };

  return (
    <div className={styles.card} onClick={openDialogClick}>
      {/** TODO: set src */}
      <img src="" alt="" className={styles.card__image} />
    </div>
  );
}

export default Card;
