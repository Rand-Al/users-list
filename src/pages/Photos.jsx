import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Search from "../components/Search";
import Photo from "../components/Photo";
import Loader from "../components/Loader";

const Photos = () => {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const filteredPhotos = photos.filter((photo) => {
    return photo.title.toLowerCase().includes(searchValue.toLowerCase());
  });
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => {
        setPhotos(response.data);
        setIsLoading(false);
      });
  });
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          <div className="flex flex-wrap border p-5 my-5 container mx-auto bg-indigo-800 bg-opacity-60 gap-6 ">
            {filteredPhotos.map((photo) => {
              return <Photo photo={photo} key={photo.id} />;
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Photos;
