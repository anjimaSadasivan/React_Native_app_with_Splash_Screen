const initialState = {
  showAutobiographyBooks: false,
  showScifibooks: false,
  selectedGenre: null,
};

const Testreducer = (state = initialState, action) => {
  if (action.type === 'SHOW_AUTOBIOGRAPHY_BOOKS') {
    return {...state, showAutobiographyBooks: true};
  }
  if (action.type === 'HIDE_AUTOBIOGRAPHY_BOOKS') {
    return {...state, showAutobiographyBooks: false};
  }
  if (action.type === 'SET_SELECTED_GENRE') {
    return {...state, selectedGenre: action.genre};
  }
  if (action.type === 'SHOW_SCIFI_BOOKS') {
    return {...state, showScifibooks: true};
  }
  if (action.type === 'HIDE_SCIFI_BOOKS') {
    return {...state, showScifibooks: false};
  }
  if (action.type === 'FETCH_DATA_SUCCESS') {
    return {...state, data: action.payload};
  }

  return state;
};

export default Testreducer;
