import React, { useState, useEffect } from "react";
import ArtistCard from "./components/ArtistCard";
import AlbumCard from "./components/AlbumCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";
const colors = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
];
function App() {
  const [color, setColor] = useState("blue");
  useEffect(() => {
    const changeColor = () =>
      setColor(colors[Math.floor(Math.random() * (colors.length - 1))]);

    /* Creating an interval that calls the countdown function every 1 second (1000ms)*/
    const int = setInterval(changeColor, 1000);

    /* Return the function you want trigger on clean up.
    In this case, I need to clear the interval */
    return () => clearInterval(int);
  }, []);

  return (
    <main style={{ backgroundColor: color }} className="container">
      <h1>Favorite Artist</h1>
      <ArtistCard />
      <AlbumCard />
    </main>
  );
}

export default App;
