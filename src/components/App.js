import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const [pizzaData, setPizzaData] = useState(undefined);
  const [selectedPizza, setSelectedPizza] = useState(undefined);


  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then((response) => response.json())
      .then((data) => setPizzaData(data))
  }, [])



  const extraProps = (selectedPizza !== undefined)
    ? { selectedPizza: selectedPizza }
    : {};


  return (
    <>
      <Header />
      <PizzaForm
        {...extraProps}
      />
      <PizzaList
        pizzaData={pizzaData}
        setSelectedPizza={setSelectedPizza} />
    </>
  );
}

export default App;
