import React, { useState, useEffect } from "react";


export default function App() {
  return (
    <div className="App">
      <Frase />
    </div>
  );
}

const Frase = props => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const getFrase = async () => {
      await fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes", {
        mode: "cors"
      })
        .then(async response => {
          const result = await response.text();
          setValue(result);
        })
        .catch(err => {
          console.log(err);
        });
    };
    getFrase();
  }, []);
  return <div>{value ? value : "No hay frase"}</div>;
};