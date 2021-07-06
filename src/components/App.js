import React, { useState, useEffect } from "react";

const App = () => {
  const [dogPics, setDogPics] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((json) => {
        setDogPics(json);
        setIsLoaded(true);
        console.log(json);
      });
  }, []);

  if (!isLoaded) return <p>Loading...</p>;

  return <img src={dogPics.message} alt="A Random Dog" />;
};

export default App;
