import React from "react";

function Pizza({ pizzaDatum, setSelectedPizza }) {
  return (
    <tr>
      <td>{pizzaDatum.topping}</td>
      <td>{pizzaDatum.size}</td>
      <td>{pizzaDatum.vegetarian ? "Yes" : "No"}</td>
      <td>
        <button type="button" onClick={() => setSelectedPizza(pizzaDatum.id)} className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
