const StockProps = ({ name, price, inStock }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{price.toFixed(2)}</p>
      {inStock ? <span>In Stock</span> : <span>Out of Stock</span>}
    </div>
  );
};

export default StockProps;
