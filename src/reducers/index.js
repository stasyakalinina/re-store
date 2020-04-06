const initialState = {
  books: [],
  loading: true,
  error: false,
};

const reducer = (state = initialState, action) => {

  switch(action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.payload,
        loading: false,
        error: false,
      };

    default:
      return state;
  }
};

export default reducer;