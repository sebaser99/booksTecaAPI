const queryGetBooks = 'SELECT * FROM books';
const queryGetBookByID = 'SELECT * FROM books WHERE id = $1';
const queryCreateBook = 'INSERT INTO books (title, author) VALUES ($1, $2)';
const queryDeleteBook = 'DELETE FROM books WHERE id = $1';
const queryUpdateBook = 'UPDATE books SET  title = $1, author = $2  WHERE id = $3';
const queryUpdateLike = 'UPDATE books SET  likes = $1  WHERE id = $2';
const queryUpdateDislike = 'UPDATE books SET  dislikes= $1  WHERE id = $2';

module.exports = {
    queryGetBooks,
    queryGetBookByID, 
    queryCreateBook, 
    queryDeleteBook,
    queryUpdateBook,
    queryUpdateLike,
    queryUpdateDislike

}