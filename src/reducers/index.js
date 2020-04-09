const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 306,
};

const updateCartItems = (cartItems, item, index) => {
  if (index === -1) {
    return [
      ...cartItems,
      item
    ]
  }

  return [
    ...cartItems.slice(0, index),
    item,
    ...cartItems.slice(index + 1)
  ]
};

const updateCartItem = (book, item = {}) => {

  const {
    id = book.id,
    title = book.title,
    count = 0,
    total = 0
  } = item;

    return {
      id,
      title,
      count: count + 1,
      total: total + book.price
    }
}

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
      let itemIndex = state.cartItems.findIndex((el) => el.id === bookId);
      let item = state.cartItems[itemIndex];
      let newItem = updateCartItem(book, item);

      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
      }

    default:
      return state;
  };
};

export default reducer;