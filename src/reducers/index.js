const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 306,
};

const reducer = (state = initialState, action) => {
  console.log(action.type);

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

    case 'BOOK_ADDED_TO_CART':
      let bookId = action.payload;
      let book = state.books.find((item) => item.id === bookId);
      let itemIndex = state.books.findIndex((el) => el.id === bookId);
      let item = state.cartItems[itemIndex];

      let newItem;

      if(item) {
        newItem = {
          ...item,
          count: item.count + 1,
          total: item.total + book.price
        }
      } else {
        newItem = {
          id: book.id,
          title: book.title,
          count: 1,
          total: book.price
        }
      }

      if(itemIndex < 0) {
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            newItem
          ]
        };
      } else {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.slice(0, itemIndex),
            newItem,
            ...state.cartItems.slice(itemIndex + 1)
          ]
        };
      }


    default:
      return state;
  }
};

export default reducer;