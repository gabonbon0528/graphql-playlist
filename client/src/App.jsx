import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useState } from "react";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

import BookList from "./components/Booklist";
import BookDetails from "./components/BookDetails";
import AddBook from "./components/AddBook";

function App() {
  const [selectedBookId, setSelectedBookId] = useState(null);

  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>📚 Reading List</h1>
        <div className="app-content">
          <div className="book-section">
            <BookList
              onBookSelect={setSelectedBookId}
              selectedBookId={selectedBookId}
            />
          </div>
          <div className="details-section">
            <BookDetails bookId={selectedBookId} />
            <AddBook />
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
