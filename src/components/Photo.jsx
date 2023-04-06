import React from "react";
import { capitalize } from "../methods/methods";

const Photo = ({ photo }) => {
  return (
    <div className="flex flex-col basis-48 mb-12 gap-3 bg-slate-700 items-center justify-center text-center p-6 pt-1 rounded">
      <h2 className="flex-auto font-bold">
        <a href={photo.url}>{capitalize(photo.title)}</a>
      </h2>
      <a href={photo.url}>
        <img src={photo.thumbnailUrl} alt="" />
      </a>
    </div>
  );
};

export default Photo;
