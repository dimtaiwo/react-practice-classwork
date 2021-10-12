import React from "react";
import ArtistCard from "./components/ArtistCard";
import AlbumCard from "./components/AlbumCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <main>
      <h1>Favorite Artist</h1>
      <ArtistCard />
      <AlbumCard />
    </main>
  );
}

export default App;
