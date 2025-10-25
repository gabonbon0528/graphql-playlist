import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";

export default function BookList({ onBookSelect, selectedBookId }) {
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <div className="loading">📖 載入書籍中...</div>;

  if (error) return <div className="error">❌ 載入失敗：{error.message}</div>;

  return (
    <div className="book-list-container">
      <h2 className="section-title">📚 書籍列表</h2>
      <ul className="book-list">
        {data?.books?.map((book) => (
          <li
            key={book.id}
            className={`book-item ${
              selectedBookId === book.id ? "selected" : ""
            }`}
            onClick={() => onBookSelect(book.id)}
          >
            <div className="book-name">{book.name}</div>
            <div className="book-genre">{book.genre}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
