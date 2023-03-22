import React from 'react';

const Searchbar = props => {
  const { onSubmit } = props;
  return (
    <header
    // className={searchbar}
    >
      <form
        // className={form}
        onSubmit={onSubmit}
      >
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          // className={input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
