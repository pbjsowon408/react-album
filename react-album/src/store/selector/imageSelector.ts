import { selector } from "recoil";
import { searchState } from "../atom/searchState";
import { pageState } from "../atom/pageState";

import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "AOPkXNtUWcqRqalofJ7D-myVb4E9JIc4hD-WK4wuOuA";
const PER_PAGE = 30;

export const imageData = selector({
  key: "imageData",
  get: async ({ get }) => {
    const searchValue = get(searchState);
    const pageValue = get(pageState);

    // API 호출
    try {
      const res = await axios.get(
        `${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`
      );
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
});
