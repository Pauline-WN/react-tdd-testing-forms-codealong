import { useState } from 'react';

function ToppingSelector({ onToppingChange }) {
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);

  const handleChange = (e) => {
    setPepperoniIsChecked(e.target.checked);
    onToppingChange(e.target.checked);
  };

  return (
    <div>
      <h3>Toppings</h3>
      <input
        type="checkbox"
        id="pepperoni"
        checked={pepperoniIsChecked}
        aria-checked={pepperoniIsChecked}
        onChange={handleChange}
      />
      <label htmlFor="pepperoni">Add pepperoni</label>
    </div>
  );
}

export default ToppingSelector;

