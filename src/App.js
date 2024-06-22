import React, { useState } from "react";
import Tours from "./components/Tours";
import data from "./data"
import "./index.css"
const App = () => {
  const [tours,settours]=useState(data);

  function removetour(id){
    const newTours= tours.filter(tour => tour.id!==id);
    settours(newTours);
  }

  if(tours.length===0){
    return(
      <div className="refresh">
        <h2>No tours left</h2>
        <button className="btn-white" onClick={()=>settours(data)}>
          Refresh
          </button>
      </div>
    )
  }
  return (
    <div className="App">
      
      <Tours tours={tours} removetour={removetour}></Tours>
    </div>
  )
};

export default App;
