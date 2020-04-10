const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 306,
};

const updateCartItems = (cartItems, item, index) => {
  if(item.count === 0) {
    return [
      ...cartItems.slice(0, index),
      ...cartItems.slice(index + 1)
    ]
  }

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

const updateCartItem = (book, item = {}, quantity) => {
  const {
    id = book.id,
    title = book.title,
    count = 0,
    total = 0
  } = item;

    return {
      id,
      title,
      count: count + quantity,
      total: total + quantity * book.price,
    }
};

const updateOrder = (state, bookId, quantity) => {
  const { books, cartItems } = state;
  let book = books.find((item) => item.id === bookId);
  let itemIndex = cartItems.findIndex((el) => el.id === bookId);
  let item = cartItems[itemIndex];
  let newItem = updateCartItem(book, item, quantity);

  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, itemIndex)
  };
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
      return updateOrder(state, action.payload, 1);

    case 'BOOK_REMOVED_FROM_CART':
      return updateOrder(state, action.payload, -1);

    case 'ALL_BOOKS_REMOVED_FROM_CART':
      const item = state.cartItems.find((el) => el.id === action.payload);
      return updateOrder(state, action.payload, -item.count);

    default:
      return state;
  };
};

export default reducer;