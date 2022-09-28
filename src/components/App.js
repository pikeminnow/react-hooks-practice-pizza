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



  const extraPropsSelectedPizza = (selectedPizza !== undefined)
    ? { selectedPizza: selectedPizza }
    : {};

  const extraPropsPizzaData = (pizzaData !== undefined)
    ? { pizzaData: pizzaData }
    : {};


  return (
    <>
      <Header />
      <PizzaForm
        {...extraPropsPizzaData}
        {...extraPropsSelectedPizza}
      />
      <PizzaList
        pizzaData={pizzaData}
        setSelectedPizza={setSelectedPizza} />
    </>
  );
}

export default App;
