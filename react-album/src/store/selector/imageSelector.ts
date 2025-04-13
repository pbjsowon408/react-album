import { selector } from "recoil";
import { searchState } from "../atom/searchState";
import { pageState } from "../atom/pageState";

import axios from "axios";

export const imageSelector = selector({
  key: "imageSelector",
  get: async ({ get }) => {
    console.log("123");
    const API_URL = "https://api.unsplash.com/search/photos";
    const API_KEY = "AOPkXNtUWcqRqalofJ7D-myVb4E9JIc4hD-WK4wuOuA";
    const PER_PAGE = 30;

    const searchValue = get(searchState);
    const pageValue = get(pageState);

    // call API
    try {
      const response = await axios.get(
        `${API_URL}?client_id=${API_KEY}&query=${searchValue}&page=${pageValue}&per_page=${PER_PAGE}`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return { results: [] };
    }
  },
});
