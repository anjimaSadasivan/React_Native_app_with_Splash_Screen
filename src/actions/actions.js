export const SHOW_AUTOBIOGRAPHY_BOOKS = 'SHOW_AUTOBIOGRAPHY_BOOKS';
export const HIDE_AUTOBIOGRAPHY_BOOKS = 'HIDE_AUTOBIOGRAPHY_BOOKS';
export const SET_SELECTED_GENRE = 'SET_SELECTED_GENRE';
export const SHOW_SCIFI_BOOKS = 'SHOW_SCIFI_BOOKS';
export const HIDE_SCIFI_BOOKS = 'HIDE_SCIFI_BOOKS';
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchData = () => ({
  type: FETCH_DATA_REQUEST,
});
