import styles from "./Card.module.scss";
import { CardDTO } from "../types/Card";

interface Card {
  data: CardDTO;
  key: string;
}

function Card(props: Card) {
  const { data, key } = props;

  const openDialogClick = () => {
    console.log("openDialog");
  };

  return (
    <div className={styles.card} onClick={openDialogClick}>
      {/** TODO: set src */}
      <img
        src={data.urls.small}
        alt={data.alt_description}
        className={styles.card__image}
      />
    </div>
  );
}

export default Card;
