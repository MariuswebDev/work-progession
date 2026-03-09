import type { JSX } from "react";
import "./stockM.css";

interface Stock {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  isVIP?: boolean;
}

export const StockM = (): JSX.Element => {
  const stock: Stock[] = [
    {
      id: 1,
      name: "Phone",
      category: "Electronics",
      price: 219,
      inStock: true,
    },
    { id: 2, name: "T-shirt", category: "Clothes", price: 59, inStock: false },
    {
      id: 3,
      name: "Basketball",
      category: "miscellenous",
      price: 47,
      inStock: false,
    },
    { id: 4, name: "PS4", category: "Electronics", price: 109, inStock: true },
  ];
  return (
    <>
      <div>
        {stock.map(
          (item, itemIndex: number): JSX.Element => (
            <div key={itemIndex} className="product-card">
              <h2>#0{item.id}</h2>
              <h3>
                <u>{item.name}</u>
              </h3>
              <h3>
                <big>{item.category.toUpperCase()}</big>
              </h3>
              <p>
                <b>${item.price}</b>
              </p>
              <hr></hr>
              <span>{item.inStock ? "🟢 Instock" : "🔴 Out of stock"}</span>
            </div>
          ),
        )}
      </div>
    </>
  );
};
