import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyBook } from "../redux";

function HooksBookContainer() {
  const numberOfBooks = useSelector((state) => state.numberOfBooks);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Hooks Container</h1>
      <h2>Number of Books - {numberOfBooks} </h2>

      <button onClick={() => dispatch(buyBook())}>BuyBooks</button>
    </div>
  );
}

export default HooksBookContainer;
