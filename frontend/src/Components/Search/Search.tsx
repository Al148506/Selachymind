import React, { ChangeEvent, JSX, useState, SyntheticEvent } from "react";

type Props = {
  onSearchSubmit:(e: SyntheticEvent) => void;
  search: string | undefined;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ onSearchSubmit, search, handleSearchChange }: Props): JSX.Element => {
  
  return (
  <>  
  <form onSubmit={onSearchSubmit}>
    <input value={search} onChange={handleSearchChange} placeholder="Search for a company..." />
  </form>
  </>
  );
};

export default Search;
