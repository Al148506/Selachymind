import React, { JSX } from "react";
import Card from "../Card/Card";
import { CompanySearch } from "../../company";
import {v4 as uuid} from "uuid";

interface Props {
  searchResults: CompanySearch[];
}

const CardList : React.FC<Props> = ({ searchResults }): JSX.Element => {
  return  <>
   {searchResults.length > 0 ? (
      searchResults.map((result) => {
        return <Card id={result.symbol} key={uuid()} searchResult={result} />;
      })
    ):(
    <h1>No Results</h1>
  )}
  </>;
};

export default CardList;
