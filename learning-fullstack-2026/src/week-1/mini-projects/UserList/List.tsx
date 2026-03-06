function List() {
  const fruits = ["apple", "banana", "mango", "pear"];
  const nums = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <ol>
        {fruits.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>

      <ul>
        {nums.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
