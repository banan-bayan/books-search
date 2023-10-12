export const uniqueBooks = (books) => {
  const uniqueBooks = [];
  const uniqueTitles = new Set();
  books.forEach(book => {
    if (!uniqueTitles.has(book.volumeInfo.title)) {
      uniqueBooks.push({
        id: book.id || '',
        title: book.volumeInfo.title || '',
        authors: book.volumeInfo.authors || [],
        linkBook: book.volumeInfo.infoLink ||  '',
        subTitle: book.volumeInfo.subtitle || '',
        category: book.volumeInfo.categories || '',
        linkImg: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '',
      });
      uniqueTitles.add(book.volumeInfo.title);
    }
  });
  return uniqueBooks;
};
