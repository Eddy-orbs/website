import React from "react";
import Img from "../Img";

const ImageGrid = ({ _relativeURL, _ID, _body, image }) => {
  const generateUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  };
  return (
    <li className="flex-column">
      <figure className="images-grid-list-img">
        <Img src={generateUrl(image)} />
      </figure>
      {_body}
    </li>
  );
};

export default ImageGrid;