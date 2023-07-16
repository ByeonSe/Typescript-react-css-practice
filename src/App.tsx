import React from "react";
import "./App.css";
import booksJson from "./books.json";

import { Book } from "./types/book";

function App() {
  const books = booksJson as Book[];
  return (
    <div className="App" data-testid="main">
      <h1>This is a our library</h1>
      {books.map((b) => b.title)}
    </div>
  );
}

export default App;
