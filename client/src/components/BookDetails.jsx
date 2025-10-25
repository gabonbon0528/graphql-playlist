import { useQuery } from "@apollo/client";
import { getBookQuery } from "../queries/queries";

export default function BookDetails({ bookId }) {
  const {
    loading: bookLoading,
    error: bookError,
    data: bookData,
  } = useQuery(getBookQuery, {
    variables: { id: bookId },
    skip: !bookId, // 只有當 bookId 存在時才執行查詢
  });

  return (
    <div className="book-details">
      {!bookId ? (
        <div className="no-selection">
          <h2 className="section-title">📖 書籍詳情</h2>
          <p>👆 請選擇一本書來查看詳情</p>
        </div>
      ) : (
        <>
          <h2 className="section-title">📖 書籍詳情</h2>

          {bookLoading && <div className="loading">📖 載入書籍詳情中...</div>}

          {bookError && (
            <div className="error">❌ 載入失敗：{bookError.message}</div>
          )}

          {bookData && (
            <div className="book-info">
              <div className="book-header">
                <h3 className="book-title">{bookData.book.name}</h3>
                <span className="book-genre-badge">{bookData.book.genre}</span>
              </div>

              <div className="author-info">
                <h4>👤 作者</h4>
                <p className="author-name">{bookData.book.author.name}</p>
              </div>

              {bookData.book.author.books.length > 1 && (
                <div className="other-books-section">
                  <h4>📚 作者的其他作品</h4>
                  <ul className="other-books">
                    {bookData.book.author.books
                      .filter((book) => book.id !== bookData.book.id)
                      .map((book) => (
                        <li key={book.id} className="other-book-item">
                          {book.name}
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
