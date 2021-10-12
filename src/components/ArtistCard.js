import React, { useState } from "react";

const ArtistCard = () => {
  const [artist, setArtistName] = useState({
    name: "The BEATLES",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/The_Fabs.JPG/440px-The_Fabs.JPG",
  });
  const [pokemonCaught, setPokemonCaught] = useState(2);

  const increasePokemonCount = () => setPokemonCaught(pokemonCaught + 1);

  return (
    <div>
      <h2>{artist.name}</h2>
      <img src={artist.img} />
      {/* <h3>Pokemon Caught: {pokemonCaught}</h3>
      <button onClick={increasePokemonCount}>I caught another one!</button> */}
    </div>
  );
};

export default ArtistCard;
