import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  javascript: [
    {
      name: "Eloquent JavaScript",
      description:
        "Probably the biggest standout of Eloquent JavaScript: A Modern Introduction to Programming is its heavy usage of practice exercises. Unlike other books on programming and JS, this book is a work of pure art.",
      rating: "4.4/5"
    },
    {
      name: "You Don't Know JS",
      description:
        "Unlike other names on the list, You Don’t Know JS is a book series. All books of the series share similarity in style and scope. The JavaScript book series help readers get acquainted with the most subtle technical aspects of the high-level, interpreted programming language.",
      rating: "4.6/5"
    },
    {
      name: "JavaScript : The Good Parts",
      description:
        "With the JavaScript: The Good Parts, author Douglas Crockford focuses on the basics of some of the lesser-known yet desirable aspects of JavaScript.",
      rating: "5/5"
    }
  ],
  c: [
    {
      name: "C Programming Language",
      description:
        "If you are serious about C programming, this book is a must in your digital library. If you have a background in Data Structures, it will be much easier for you to follow the examples. ",
      rating: "4.9/5"
    },
    {
      name: "C Programming Absolute Beginner’s Guide",
      description:
        "C Programming Absolute Beginner’s Guide is an exceptional book for beginners. It teaches the basics of the C language clearly. ",
      rating: "4.8/5"
    },
    {
      name: "C: The Complete Reference",
      description:
        "This is the 4th edition of the perfect C++ reference book. You will learn C as a subject of C++ in this book. ",
      rating: "5/5"
    }
  ],
  fiction: [
    {
      name: "Hamlet by William Shakespeare ",
      description: "To be or not to be… that is one of many questions.",
      rating: "5/5"
    },
    {
      name: "The Road by Cormac McCarthy ",
      description:
        "Perhaps the darkest and yet most powerful book about parenthood. A father fights to keep his boy alive in a post-apocalyptic world.",
      rating: "4.7/5"
    },
    {
      name: "Great Expectations by Charles Dickens",
      description:
        "One of the most universally loved novels in the English language, it’s still revered today.",
      rating: "4.8/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("javascript");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Book Recommendation App </h1>
      <p> Checkout my favorite books. Select a genre to get started </p>
      <div>
        {Object.keys(bookDB).map((genre) => (
          <button className="btn" onClick={() => genreClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li className="booklist" key={book.name}>
              {" "}
              <div className="bkName"> {book.name} </div>
              <div className="bkDesc">{book.description} </div>
              <div style={{ color: "#fefefe" }}>{book.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
