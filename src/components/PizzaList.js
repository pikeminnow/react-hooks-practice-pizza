import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzaData, setSelectedPizza }) {

  if (pizzaData === undefined) {
    return null;
  }


  const pizzaRows = pizzaData.map((pizzaDatum) => {
    return <Pizza
      key={pizzaDatum.id}
      pizzaDatum={pizzaDatum}
      setSelectedPizza={setSelectedPizza}
    />
  })

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {pizzaRows}
      </tbody>
    </table>
  );
}

export default PizzaList;
