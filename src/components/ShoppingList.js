import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState("");
  let newItems = [...items];

  function handleSelect(event) {
    setCategory(event.target.value);
  }

  let filterItems = () => {
    if (selectedCategory === "All" || selectedCategory === "") {
      newItems = [...items];
    } else {
      newItems = items.filter((item) => {
        return item.category === selectedCategory;
      });
    }
    return newItems;
  };

  console.log(filterItems());
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelect}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterItems().map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
