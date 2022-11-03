import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  var year = new Date().getFullYear();

  return (
    <div className="App">
      <header>
        <h1>Keeper</h1>
      </header>
      <Note />
      <footer>
        <p>Copyright {year}</p>
      </footer>
    </div>
  );
}

export default App;
