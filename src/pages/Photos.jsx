import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Search from "../components/Search";
import Photo from "../components/Photo";

const Photos = () => {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const filteredPhotos = photos.filter((photo) => {
    return photo.title.toLowerCase().includes(searchValue.toLowerCase());
  });
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => {
        setPhotos(response.data);
      });
  });
  return (
    <>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="flex flex-wrap border p-5 mb-10 container mx-auto bg-indigo-800 bg-opacity-60 gap-6 justify-between ">
        {filteredPhotos.map((photo) => {
          return <Photo photo={photo} key={photo.id} />;
        })}
      </div>
    </>
  );
};

export default Photos;
