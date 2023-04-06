import React from "react";
import { NavLink } from "react-router-dom";
import { capitalize } from "../methods/methods";

const Album = ({ album, photos }) => {
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
};

export default Album;
