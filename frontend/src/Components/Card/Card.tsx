import React, { JSX } from "react";
import "./Card.css";
import HomeAlone from "../../Images/Home_Alone.webp"; // ✅ Import directo
interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card: React.FC<Props> = ({
  companyName,
  ticker,
  price,
}: Props): JSX.Element => {
  return (
    <div className="card">
      <img src={HomeAlone} alt="Home Alone" />

      <div className="details">
        <h2>
          {companyName} ({ticker})
        </h2>
        <p>${price}</p>
      </div>
      <p className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
        consequatur quaerat corporis, eum adipisci consectetur velit sunt quos
        doloremque, voluptas nam debitis libero nemo quo recusandae quidem
        voluptatem quae delectus!
      </p>
    </div>
  );
};

export default Card;
