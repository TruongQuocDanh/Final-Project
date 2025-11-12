import BookCard from "./BookCards/BookCard";
import "./BookList.css";
export default function BookList({ books, onViewBook }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onView={onViewBook} />
      ))}
    </div>
  );
}
