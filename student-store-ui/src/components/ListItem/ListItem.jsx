import "./ListItem.css";

function ListItem({ item }) {

  // Destructure `food` and `quantity` from `item` object
  const { food, quantity } = item;

  return (
    <div className="ListItem">
      <h2>{food}: {quantity}</h2>
    </div>
  );
}

export default ListItem;
