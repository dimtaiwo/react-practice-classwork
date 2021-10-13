import React, { useState, useEffect } from "react";
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
      title: "yesterday",
      img: "https://upload.wikimedia.org/wikipedia/en/7/74/Rubber_Soul.jpg",
      releaseDate: 1965,
      liked: false,
    },
    {
      id: 3,
      title: "Yellow Submarine",
      img: "https://upload.wikimedia.org/wikipedia/en/a/ac/TheBeatles-YellowSubmarinealbumcover.jpg",
      releaseDate: 1969,
      liked: false,
    },
  ]);

  const [albumid, setId] = useState(0);
  const [lyrics, setLyrics] = useState("");

  const handleApiCall = (albums) => {
    return albums[albumid];
  };

  useEffect(() => {
    const album = handleApiCall(albums);
    const handleFetch = async () => {
      const data = await fetch(
        `https://api.lyrics.ovh/v1/beatles/${album.title}`
      );
      const lyrics = await data.json();
      setLyrics(lyrics.lyrics);
    };

    handleFetch();
  }, [albums]);

  const handleClick = (album) => {
    const newAlbums = [...albums];
    const index = albums.indexOf(album);
    newAlbums[index] = { ...albums[index] };
    newAlbums[index].liked = !newAlbums[index].liked;
    setId(index);
    setAlbum(newAlbums);
  };

  const renderCards = () => {
    return albums.map((album) => (
      <div className="card col-4 ml-5 p-4" style={{ width: "18rem" }}>
        <img className="card-img-top" src={album.img} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{album.title}</h5>
          <p className="card-text">{album.releaseDate}</p>
          <LikesComponent
            onClick={() => handleClick(album)}
            liked={album.liked}
          />
        </div>
      </div>
    ));
  };

  return (
    <div className="container">
      Albums
      <div className="container">
        <div className="row">{renderCards()}</div>

        <p className="mt-5" style={{ fontSize: "18px" }}>
          {lyrics}
        </p>
      </div>
    </div>
  );
};

export default AlbumCard;
