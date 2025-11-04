import BookCard from "./BookCard";
import "./book-list.css";

export default function BookList({ books, onView }) {
  return (
    <div className="book-list">
      {books.map((b) => (
        <BookCard key={b.id || b.book_id || `${b.title}-${Math.random()}`} book={b} onView={onView} />
      ))}
    </div>
  );
}
