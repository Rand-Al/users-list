import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import Album from "../components/Album";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const { userId } = useParams();
  const [searchValue, setSearchValue] = useState("");

  const filteredAlbums = albums.filter((album) => {
    return album.title.toLowerCase().includes(searchValue.toLowerCase());
  });
  useEffect(() => {
    async function fetchData() {
      const albumsResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/albums?userId=${userId}`
      );
      const photosResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/photos`
      );
      setAlbums(albumsResponse.data);
      setPhotos(photosResponse.data);
    }
    fetchData();
  }, [userId]);
  return (
    <>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="border p-5 mb-10 container mx-auto bg-indigo-800 bg-opacity-60">
        {filteredAlbums.map((album) => {
          return <Album album={album} photos={photos} />;
        })}
      </div>
    </>
  );
};

export default Albums;
