import React from "react";
import NavBar from "./components/NavBar.js";
import PlaceCards from "./components/PlaceCards.js";
import data from "./data"

function App() {
  const cards = data.map(item => {
    return(
      <PlaceCards 
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="app">
      <NavBar />
      <section className="place-cards">
        {cards}
      </section>
    </div>
  );
}

export default App;
