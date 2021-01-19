import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div>
      <h1>😎 Emoji Search 😎</h1>
      <input
        type="search"
        placeholder="What emoji are you looking for?"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
    </div>
  );
};

export default Search;
