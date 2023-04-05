import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { capitalize } from "../methods/methods";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const { userId } = useParams();
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => {
        setAlbums(response.data);
      });
  }, [userId]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos`)
      .then((response) => {
        setPhotos(response.data);
        console.log(photos);
      });
  }, [photos]);
  return (
    <div className="border p-5 my-10 container mx-auto bg-indigo-800 bg-opacity-60">
      {albums.map((album) => {
        return (
          <div key={album.id}>
            <h2 className="font-bold text-2xl mb-1">
              <NavLink to={`/album/${album.id}`} className="hover:underline">
                {capitalize(album.title)}
              </NavLink>
            </h2>
            <p className="mb-4">
              {
                photos.filter((photo) => {
                  return photo.albumId === album.id;
                }).length
              }{" "}
              photos
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Albums;
