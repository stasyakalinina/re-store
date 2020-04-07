const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [
    {
      id: 1,
      name: 'Book 1',
      count: 3,
      total: 150
    },
    {
      id: 2,
      name: 'Book 2',
      count: 1,
      total: 72
    },
    {
      id: 3,
      name: 'Book 3',
      count: 2,
      total: 84
    },
  ],
  orderTotal: 306,
};

const reducer = (state = initialState, action) => {

  switch(action.type) {

    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };
    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;