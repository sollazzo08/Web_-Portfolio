import React from "react";
import "../../../styles/_carouselContent.scss";

const Image = ({ images }) => {
  return <img className="img" alt="project_image"src={images} />;
};

export default Image;
