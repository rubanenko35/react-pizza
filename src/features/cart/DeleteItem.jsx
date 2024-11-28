import React from "react";
import Button from "../../ui/Button.jsx";
import { deleteItem } from "./cartSlice.js";
import { useDispatch } from "react-redux";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  function handleDeleteItem() {
    dispatch(deleteItem(pizzaId));
  }

  return (
    <Button type="small" onClick={handleDeleteItem}>
      Delete
    </Button>
  );
}

export default DeleteItem;
