
export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler',
      price: 32,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg',
    },
    {
      id: 2,
      title: 'Release It!',
      author: 'Michael T. Nygard',
      price: 28,
      coverImage: 'https://images-na.ssl-images-amazon.com/images/I/419zAwJJH4L._SX415_BO1,204,203,200_.jpg',
    },
    {
      id: 3,
      title: 'JavaScript: The Definitive Guide: Activate Your Web Pages',
      author: 'David Flanagan',
      price: 21,
      coverImage: 'https://m.media-amazon.com/images/I/91xorHXzWbL._AC_UY218_ML3_.jpg',
    },
    {
      id: 4,
      title: 'A Smarter Way to Learn JavaScript',
      author: 'Mark Myers',
      price: 19,
      coverImage: 'https://m.media-amazon.com/images/I/617LMuOkVWL._AC_UY218_ML3_.jpg',
    },
    {
      id: 5,
      title: 'JavaScript: The Good Parts: The Good Parts',
      author: 'Douglas Crockford',
      price: 14,
      coverImage: 'https://m.media-amazon.com/images/I/91YlBt-bCHL._AC_UY218_ML3_.jpg',
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(Math.random() > 0.95) {
          reject(new Error("Something happend!!!"));
        } else {
          resolve(this.data);
        }
      }, 2000)
    });
  }
}