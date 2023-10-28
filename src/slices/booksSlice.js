import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import axios from "axios";
import { uniqueBooks } from "../utils";
import { booksPerPage } from "../constants";

const selectCategory = createSelector(
  (state) => state.booksSlice.category,
  (someData) => someData,
);
const selectSortedBy = createSelector(
  (state) => state.booksSlice.sortedBy,
  (someData) => someData,
);
const nextIndex = createSelector(
  (state) => state.booksSlice.nextIndex,
  (someData) => someData,
);

export const loadBooks = createAsyncThunk(
  "books/loadBooks",
  async (payload, action) => {
    if (!payload) return;
    const inputValue = payload;
    const booksStartIndex = nextIndex(action.getState());
    let category = selectCategory(action.getState());
    (category === 'all') ? (category = '') : (category = ` subject:${category}`);

    const sortedBy = selectSortedBy(action.getState());
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes`,
        {
          params: {
            q: `${inputValue}${category}`,
            orderBy: sortedBy,
            startIndex: booksStartIndex,
            maxResults: booksPerPage,
            key: process.env.REACT_APP_API_KEY,
          },
        },
      );
      console.log(response, 'RESPONSE')
      const totalItems = response.data.totalItems;
      const { data } = response;
      const { items } = data;
      const result = uniqueBooks(items);
      return { result, totalItems, inputValue };
    } catch (e) {
      throw new Error('Ошибка запроса');
    }
  },
);

const booksAdapter = createEntityAdapter();
const booksSlice = createSlice({
  name: "books",
  initialState: booksAdapter.getInitialState({
    category: "all",
    sortedBy: "newest",
    nextIndex: 0,
    totalItems: 0,
    searchValue: '',
    isLoading: false,
    isError: false,
  }),
  reducers: {
    setItemsAmount: (state, action) => {
      state.totalItems = action.payload
    },
    setNextIndex: (state, action) => {
      state.nextIndex = action.payload;
    },
    setCategoryType: (state, action) => {
      state.category = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortedBy = action.payload;
    },
    setSearchValue: (state, { payload }) => {
      state.searchValue = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadBooks.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loadBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        if (state.ids.length) {
          booksAdapter.updateMany(state, action.payload.result);
        }
        if (state.searchValue !== action.payload.inputValue) {
          booksAdapter.setAll(state, action.payload.result);
        }
        booksAdapter.addMany(state, action.payload.result);
        state.totalItems = action.payload.totalItems;
        state.nextIndex = state.ids.length;
        state.searchValue = action.payload.inputValue;
      })
      .addCase(loadBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
  },
});

export const { addBooks, addBook, setCategoryType, setSortBy, setSearchValue, isError, isLoading } =
  booksSlice.actions;
export default booksSlice.reducer;
export const selectors = booksAdapter.getSelectors((state) => state.booksSlice);
