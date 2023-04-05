import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { capitalize } from "../methods/methods";

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
    <div className="border p-5 my-10 container mx-auto bg-indigo-800 bg-opacity-60">
      {albums.map((album) => {
        return (
          <div key={album.id}>
            <h2 className="font-bold text-2xl mb-3">
              <NavLink to={`/album/${album.id}`} className="hover:underline">
                {capitalize(album.title)}
              </NavLink>
            </h2>
            <div>{console.log(album)}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Albums;
