import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const { userId } = useParams();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => {
        setAlbums(response.data);
      });
  }, [userId]);
  return (
    <>
      {albums.map((album) => {
        return (
          <div key={album.id}>
            <h2>{album.title}</h2>
            <p>{album.body}</p>
          </div>
        );
      })}
    </>
  );
};

export default Albums;
