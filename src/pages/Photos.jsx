import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { capitalize } from "../methods/methods";

const Photos = () => {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => {
        setPhotos(response.data);
      });
  });
  return (
    <div className="flex flex-wrap border p-5 my-10 container mx-auto bg-indigo-800 bg-opacity-60 gap-6 justify-between ">
      {photos.map((photo) => {
        return (
          <div
            key={photo.id}
            className="flex flex-col basis-48 mb-12 gap-3 bg-slate-700 items-center justify-center text-center p-6 pt-1 rounded"
          >
            <h2 className="flex-auto font-bold">
              <a href={photo.url}>{capitalize(photo.title)}</a>
            </h2>
            <a href={photo.url}>
              <img src={photo.thumbnailUrl} alt="" />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Photos;
