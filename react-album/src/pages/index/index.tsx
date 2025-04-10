import CommonHeader from "@/components/common/header/CommonHeader";
import CommonSeachBar from "@/components/common/searchBar/CommonSearchBar";
import CommonNav from "@/components/common/navigation/CommonNav";
import CommonFooter from "@/components/common/footer/CommonFooter";
import Card from "./components/Card";
//CSS
import styles from "./styles/index.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";

function index() {
  const [imgUrls, setImgUrls] = useState<[]>([]);
  const getData = async () => {
    // Call Open API
    const API_URL = "https://api.unsplash.com/search/photos";
    const API_KEY = "AOPkXNtUWcqRqalofJ7D-myVb4E9JIc4hD-WK4wuOuA";
    const PER_PAGE = 30;

    // TODO: 나중에 삭제
    const searchValue = "Korea";
    const pageValue = 100;

    try {
      const response = await axios.get(
        `${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`
      );
      console.log(response);

      if (response.status === 200) {
        setImgUrls(response.data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const cardList = imgUrls.map((card: any) => {
    return <Card data={card} key={card} />;
  });

  // Call getData()
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.page}>
      {/** Common Header UI Part*/}
      <CommonHeader />
      {/** Common Navigation UI Part */}
      <CommonNav />
      <div className={styles.page__contents}>
        <div className={styles.page__contents__introBox}>
          <div className={styles.wrapper}>
            <span className={styles.wrapper__title}>Photo Album</span>
            <span className={styles.wrapper__desc}>
              It is an Album that gives splash of photo. <br />
              by Eddie.
            </span>
            {/** SearchBar UI Part */}
            <CommonSeachBar />
          </div>
        </div>
        <div className={styles.page__contents__imageBox}>{cardList}</div>
      </div>
      {/** Common Footer UI Part (Pagenation)*/}
      <CommonFooter />
    </div>
  );
}

export default index;
