import { Fragment, useState } from "react";

function Quantity() {
  // Define a state variable to store the count
  const [count, setCount] = useState(0);

  // Function to handle input changes
  const handleInputChange = (event: { target: { value: string } }) => {
    const newValue = parseInt(event.target.value, 10) || 0;
    setCount(newValue);
  };

  // Function to increment the count
  const increaseCount = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Fragment>
      <button
        className="counter-minus btn btn-white lh-2 shadow-none"
        onClick={decrementCount}
      >
        <i className="fe fe-minus"></i>
      </button>
      <input
        type="text"
        value={count}
        onChange={handleInputChange}
        className="qty"
      />
      <button
        className="counter-plus btn btn-white lh-2 shadow-none"
        onClick={increaseCount}
      >
        <i className="fe fe-plus"></i>
      </button>
    </Fragment>
  );
}

export default Quantity;
