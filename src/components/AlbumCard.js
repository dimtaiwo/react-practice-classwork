import React, { useState } from "react";
import LikesComponent from "./LikesComponent";

const AlbumCard = () => {
  const [albums, setAlbum] = useState([
    {
      id: 1,
      title: "Please Please me",
      img: "https://upload.wikimedia.org/wikipedia/en/c/c0/PleasePleaseMe_audio_cover.jpg",
      releaseDate: 1963,
      liked: false,
    },
    {
      id: 2,
      title: "Rubber Soul",
      img: "https://upload.wikimedia.org/wikipedia/en/7/74/Rubber_Soul.jpg",
      releaseDate: 1965,
      liked: false,
    },
    {
      id: 3,
      title: "Yellow Submarines",
      img: "https://upload.wikimedia.org/wikipedia/en/a/ac/TheBeatles-YellowSubmarinealbumcover.jpg",
      releaseDate: 1969,
      liked: false,
    },
  ]);

  const handleClick = (album) => {
    console.log(album);
    const newAlbums = [...albums];
    console.log(newAlbums);
    const index = albums.indexOf(album);
    newAlbums[index] = { ...albums[index] };
    newAlbums[index].liked = !newAlbums[index].liked;
    setAlbum(newAlbums);
  };

  const renderCards = () => {
    return albums.map((album) => (
      <div key={album.id} className="class-body-top">
        <img className="card-img" src={album.img} />
        <p className="card-title">{album.title}</p>
        <p className="card-text">{album.releaseDate}</p>
        <LikesComponent
          onClick={() => handleClick(album)}
          liked={album.liked}
        />
      </div>
    ));
  };

  return (
    <section>
      <h5>Albums</h5>
      <div className="card" style={{ width: "400px" }}>
        {renderCards()}
      </div>
    </section>
  );
};

export default AlbumCard;
