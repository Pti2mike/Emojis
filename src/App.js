import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Line from "./components/Line";

import emojiList from "./assets/emojiList.json";

function App() {
  // console.log(emojiList);
  const [search, setSearch] = useState("");

  const array = [];

  for (let i = 0; i < emojiList.length; i++) {
    if (emojiList[i].keywords.indexOf(search) !== -1) {
      array.push(
        <Line
          key={emojiList[i].title}
          title={emojiList[i].title}
          symbol={emojiList[i].symbol}
        />
      );
    }
  }

  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      {array}
      <Footer />
    </div>
  );
}

export default App;
