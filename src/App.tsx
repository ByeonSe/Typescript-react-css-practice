import React from "react";
import "./App.css";
import booksJson from "./books.json";
import Card from './Card'

import { Book } from "./types/book";

function App() {
  const books = booksJson as Book[];
  return (
    <div className="App" data-testid="main">
      <h1>This is a our library</h1>
      {books.map((b) =>
      <Card title={b.title} author={b.author} thumbnail={b.thumbnail} /> )}
    </div>
  );
}

export default App;
