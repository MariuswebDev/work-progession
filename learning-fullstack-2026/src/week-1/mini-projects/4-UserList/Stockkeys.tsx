const StockKeys = () => {
  const products = [
    { id: 1, category: "Electronics", inStock: false },
    { id: 2, category: "clothes", inStock: true },
    { id: 3, category: "gadget", inStock: false },
    { id: 4, category: "utilities", inStock: true },
  ];
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.category} -{" "}
            {product.inStock ? "🟢 Avalable" : "🔴 Not Available"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockKeys;
