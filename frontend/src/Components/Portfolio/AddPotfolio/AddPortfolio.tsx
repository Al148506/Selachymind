import React from "react";

interface Props {
  onPortfolioCreate: (e: React.SyntheticEvent) => void;
  symbol: string;
}

const AddPortfolio = ({ onPortfolioCreate, symbol }: Props) => {
  return (
    <form onSubmit={onPortfolioCreate}>
      <input readOnly={true} hidden={true} value={symbol} />
      <button type="submit">Add to Portfolio</button>
    </form>
  );
};

export default AddPortfolio;
