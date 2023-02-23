import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState("");
  const [itemTitle, setTitle] = useState("Add to Cart");
  const [classN, setClass] = useState("add");

  function handleCart() {
    if (cart === "") {
      setCart("in-cart");
      setTitle("Remove From Cart");
      setClass("remove");
    } else {
      setCart("");
      setTitle("Add to Cart");
      setClass("add");
    }
  }

  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={classN} onClick={handleCart}>
        {itemTitle}
      </button>
    </li>
  );
}

export default Item;
