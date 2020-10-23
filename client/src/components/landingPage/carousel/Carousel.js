import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import Content from "./Content";
import Image from "./Image";

import image1 from "../../../images/ratemydorm/landingPage.png";
import image2 from "../../../images/ratemydorm/trello.png";
import image3 from "../../../images/ratemydorm/singleDorm.png";
import image4 from "../../../images/ratemydorm/useCase.png";
import image5 from "../../../images/ratemydorm/map.png";

import celaImage1 from "../../../images/cela/cela_dash.png";
import celaImage2 from "../../../images/cela/db_design.png";
import celaImage3 from "../../../images/cela/cela_job_viewer.png";
import celaImage4 from "../../../images/cela/adminer.png";
import celaImage5 from "../../../images/cela/addJob.png";

import mistyImage1 from "../../../images/misty/interface.png";
import mistyImage2 from "../../../images/misty/trello.png";
import mistyImage3 from "../../../images/misty/mistyDocs.png";
import mistyImage4 from "../../../images/misty/Misty.png";
import mistyImage5 from "../../../images/misty/mongoDBAtlas.png";



import "../../../styles/_projectModal.scss";
import "../../../styles/_carousel.scss";


const content = require("../../../content");

const Carousel = ({ openCela, openMisty, openTermProject, openRateMyDorm, closeModal}) => {
  const [x, translateX] = useState(0);
  const [count, setCount] = useState(0);

  const getImageArray = () => {
    const rateMyDormImages = [
      <Image images={image1} />,
      <Image images={image2} />,
      <Image images={image3} />,
      <Image images={image4} />,
      <Image images={image5} />,
    ];

    const celaImages = [
      <Image images={celaImage1} />,
      <Image images={celaImage2} />,
      <Image images={celaImage3} />,
      <Image images={celaImage4} />,
      <Image images={celaImage5} />,
    ];
    const mistyImages = [
      <Image images={mistyImage1} />,
      <Image images={mistyImage2} />,
      <Image images={mistyImage3} />,
      <Image images={mistyImage4} />,
      <Image images={mistyImage5} />,
    ];
    const termProjectImages = [
      <Image images={celaImage1} />,
      <Image images={celaImage2} />,
      <Image images={celaImage3} />,
      <Image images={celaImage4} />,
      <Image images={celaImage5} />,
    ];
    if (openCela) {
      return celaImages;
    } else if(openRateMyDorm) {
      return rateMyDormImages;
    } else if (openMisty) {
      return mistyImages;
    } else if (openTermProject) {
      return termProjectImages;
    } else
      return null;
  };
  
  const getRepo = () => {
    if(openMisty){
      return "https://github.com/sollazzo08/misty-albany-499"
    } else if(openCela){
      return "https://github.com/sollazzo08/cela_job_veiwer"
    } else if(openRateMyDorm) {
      return "https://github.com/sollazzo08/Rate-My-Dorm"
    } else return null;
  };

  const getContent = (count) => {

    if (openCela) {
      if (count === 0) {
        return <Content content={content.cela.content0} count={count}/>;
      } else if (count === 1) {
        return <Content content={content.cela.content1} />;
      } else if (count === 2) {
        return <Content content={content.cela.content2} />;
      } else if (count === 3) {
        return <Content content={content.cela.content3} openCela={openCela} />;
      } else if (count === 4) {
        return <Content content={content.cela.content4} />;
      } else return null;
    } else if(openRateMyDorm){
      if (count === 0) {
        return <Content content={content.ratemydorm.content0} count={count}/>;
      } else if (count === 1) {
        return <Content content={content.ratemydorm.content1} />;
      } else if (count === 2) {
        return <Content content={content.ratemydorm.content2} />;
      } else if (count === 3) {
        return <Content content={content.ratemydorm.content3} />;
      } else if (count === 4) {
        return <Content content={content.ratemydorm.content4} />;
      } else return null;
    } else if(openMisty){
      if (count === 0) {
        return <Content content={content.misty.content0} count={count}/>;
      } else if (count === 1) {
        return <Content content={content.misty.content1} />;
      } else if (count === 2) {
        return <Content content={content.misty.content2} />;
      } else if (count === 3) {
        return <Content content={content.misty.content3} />;
      } else if (count === 4) {
        return <Content content={content.misty.content4} />;
      } else return null;
    } else if(openTermProject){
      if (count === 0) {
        return <Content content={content.termProject.content0} count={count}/>;
      } else if (count === 1) {
        return <Content content={content.termProject.content1} />;
      } else if (count === 2) {
        return <Content content={content.termProject.content2} />;
      } else if (count === 3) {
        return <Content content={content.termProject.content3} />;
      } else if (count === 4) {
        return <Content content={content.termProject.content4} />;
      } else return null;
    }
  };

  const goRight = () => {
    x === -100 * (getImageArray().length - 1)
      ? translateX(0)
      : translateX(x - 100);
    if (count === 4) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };
  const goLeft = () => {
    x === 0
      ? translateX(-100 * (getImageArray().length - 1))
      : translateX(x + 100);
    if (count <= 0) {
      setCount(4);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <React.Fragment>
      <div className="left-panel">
        <div className="custom-carousel">
          <div className="custom-inner-carousel">
            {getImageArray().map((image, index) => {
              return (
                <div
                  className="custom-carousel-item"
                  key={index}
                  style={{
                    transform: `translate(${x}%)`,
                    transition: "transform 1s",
                  }}
                >
                  {image}
                </div>
              );
            })}
          </div>
          <div>
            <FontAwesomeIcon
              id="goLeft"
              icon={faAngleDoubleLeft}
              onClick={goLeft}
            />
          </div>
          <div>
            <FontAwesomeIcon
              id="goRight"
              icon={faAngleDoubleRight}
              onClick={goRight}
            />
          </div>
        </div>
      </div>
      <div className="right-panel">{getContent(count)}
      
      <div className="close-project-modal">
            <FontAwesomeIcon icon={faWindowClose} onClick={closeModal} />
      </div>
        <a href={getRepo()} target="_blank" rel="noopener noreferrer"><button className="github-btn">Repository<i className="github-btn-icon fab fa-github"></i></button></a>
      </div>
    </React.Fragment>
  );
};

export default Carousel;
