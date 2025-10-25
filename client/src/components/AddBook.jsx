import { useMutation, useQuery } from "@apollo/client";
import {
  getAuthorsQuery,
  addBookMutation,
  getBooksQuery,
} from "../queries/queries";

const AddBook = () => {
  const [addBook, { loading, error }] = useMutation(addBookMutation, {
    refetchQueries: [{ query: getBooksQuery }],
  });
  const {
    loading: authorsLoading,
    error: authorsError,
    data: authorsData,
  } = useQuery(getAuthorsQuery);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({
      variables: {
        name: e.target.name.value,
        genre: e.target.genre.value,
        authorId: e.target.authorId.value,
      },
    });
    e.target.reset();
  };

  return (
    <div className="add-book-form">
      <h2 className="section-title">➕ 添加新書</h2>
      <form onSubmit={handleSubmit} className="book-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            📖 書名
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="請輸入書名"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="genre" className="form-label">
            🏷️ 類型
          </label>
          <input
            type="text"
            name="genre"
            id="genre"
            placeholder="請輸入書籍類型"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="authorId" className="form-label">
            👤 作者
          </label>
          <select name="authorId" id="authorId" required>
            <option value="">請選擇作者</option>
            {authorsData?.authors?.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="submit-btn">
          <span>➕</span>
          添加書籍
        </button>

        {(loading || authorsLoading) && (
          <div className="loading">⏳ 處理中...</div>
        )}

        {(error || authorsError) && (
          <div className="error">
            ❌ 錯誤：{error?.message || authorsError?.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default AddBook;
