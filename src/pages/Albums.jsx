import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import Album from "../components/Album";
import Loader from "../components/Loader";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const { userId } = useParams();
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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
      setIsLoading(false);
    }
    fetchData();
  }, [userId]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          <div className=" mb-10 px-5 container mx-auto bg-opacity-60">
            {filteredAlbums.map((album) => {
              return <Album album={album} photos={photos} />;
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Albums;
