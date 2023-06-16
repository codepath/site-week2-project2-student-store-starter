import { useState } from "react";
import "./ListItemForm.css";

function ListItemForm({ addItem }) {
  const [formData, setFormData] = useState({ food: "", quantity: 1 });

  // Send { food, quantity } to parent and clear form
  function handleSubmit(event) {
    event.preventDefault();
    addItem(formData);
    setFormData({ food: "", quantity: 1 });
  }

  // Update local state with current state of input element (render each keystroke)
 function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  // NOTE: The name attribute on the form input fields
  // MUST match the formData object key names
  return (
    <form onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="name">Food:</label>
      <input
        className="form-input"
        name="food"
        value={formData.food}
        onChange={handleChange}
      />
      <label className="form-label" htmlFor="qty">Quantity:</label>
      <input
        className="form-input"
        type="number"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
      />
      <button>Add Item</button>
    </form>
  );
}

export default ListItemForm;
