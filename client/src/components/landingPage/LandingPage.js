import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectModal from "./modals/ProjectModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom } from "@fortawesome/free-solid-svg-icons";
import "../../styles/_landingPage.scss";
import "../../styles/_icons.scss";

const LandingPageContent = () => {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [quote, setQuote] = useState("");
  const [openRateMyDorm, setOpenRateMyDorm] = useState(false);
  const [openCela, setOpenCela] = useState(false);
  const [openMisty, setOpenMisty] = useState(false);
  const [openTermProject, setOpenTermProject] = useState(false);

  const handleOpenRateMyDormModal = () => {
    setOpenRateMyDorm(true);
  };

  const handleOpenCelaModal = () => {
    setOpenCela(true);
  };
  const handleOpenMistyModal = () => {
    setOpenMisty(true);
  };
  const handleOpenTermProjectModal = () => {
    setOpenTermProject(true);
  };

  const closeModals = () => {
    setOpenMisty(false);
    setOpenCela(false);
    setOpenRateMyDorm(false);
  }
  

  const handleQuoteShuffle = (e) => {
    e.preventDefault();
    axios
      .get("https://mike.sollazzo.tk/api/quote/", {})
      .then((response) => setQuote(response.data.quote))
      .catch((error) => console.log(error.response));
  };

  useEffect(() => {
    fetch("https://mike.sollazzo.tk/api/image/")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data[0].url);
        const imageURL = data[0].url;
        setImg(imageURL);
      });

    axios
      .get("https://mike.sollazzo.tk/api/userInfo/", {})
      .then((response) => {
        setName(response.data[0].name);
        setBio(response.data[0].bio);
      })
      .catch((err) => console.log(err));

    axios
      .get("https://mike.sollazzo.tk/api/quote/", {})
      .then((response) => {
        setQuote(response.data.quote);
      })
      .catch((error) => console.log(error.response));
  }, []);

  return (
    <div className="container-fluid background-image">
      <div className="row top-row">
        <div className="col-sm-6 ">
          <div className="row text-center">
            <div className="col-md-12 col-top-left">
              <div className="row text-skills mt-4 justify-content-between">
                <div className="col-sm-12">
                  <h2 className="text-left text-light pl-3">
                    <u>Skills</u>
                  </h2>
                  <div className="row mt-4 pt-2 text-box-row1">
                    <div className="col-md-4">
                      <p className="icons">
                        <i className="fab fa-html5 fa-4x"></i>
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p className="icons">
                        <i className="fab fa-js fa-4x "></i>
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p className="icons">
                        <i className="fab fa-linux fa-4x "></i>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <p className="icons">
                        <i className="fab fa-react fa-4x"></i>
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p className="icons">
                        <i className="fab fa-sass fa-4x"></i>
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p className="icons">
                        <i className="fab fa-git fa-4x"></i>
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p className="icons">
                        <i className="fab fa-node fa-4x"></i>
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p className="icons">
                        <i className="fab fa-docker fa-4x"></i>
                      </p>
                    </div>
                    <div className="col-md-4">
                      <p className="icons">
                        <i className="fab fa-java fa-4x"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 pt-4 col-top-right">
          <h5 className="landingName mb-0 display-4 pl-4">{name}</h5>
          <h3 className="landingName2 mb-0 pl-4">{bio}</h3>
          <div className="text-right">
            <div className="quote mt-3">{quote}</div>
            <button
              type="submit"
              className="random_btn btn py-0 px-0"
              onClick={handleQuoteShuffle}
            >
              <FontAwesomeIcon icon={faRandom} size="2x" />
            </button>
          </div>
        </div>
        <div className="col-sm-2 pt-4">
          <div className="mask">
            <img
              className="profileImage shadow-lg"
              src={img}
              width="250px"
              height="250px"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-md-12">
          <h2 className="text-left text-light pl-3">
            <u>Projects</u>
          </h2>
        </div>
      </div>
      <div className="row mx-auto bottom-row">
        <div className="col-sm-5 justify-content-between">
          <div className="row text-project justify-content-between ">
            <div className="col-md-4 text-box-row1">
              <div
                className="text-block text-center"
                onClick={handleOpenRateMyDormModal}
              >
                <div className="project-title ">Rate My Dorm</div>
              </div>
              {openRateMyDorm && (
                <ProjectModal openRateMyDorm={openRateMyDorm} closeModal={closeModals}/>
              )}
            </div>
            <div className="col-md-4 text-box-row1">
              <div
                className="text-block text-center"
                onClick={handleOpenMistyModal}
              >
                <div className="project-title">Misty II</div>
              </div>
              {openMisty && <ProjectModal openMisty={openMisty} closeModal={closeModals}/>}
            </div>
          </div>
          <div className="row text-project justify-content-between pt-4 ">
            <div className="col-md-4 text-box-row2">
              <div
                className="text-block text-center"
                onClick={handleOpenCelaModal}
              >
                <div className="project-title align-self-center">
                  Cela Home Improvements
                </div>
              </div>
              {openCela && <ProjectModal openCela={openCela} closeModal={closeModals}/>}
            </div>
            <div className="col-md-4 text-box-row2">
              <div
                className="text-block text-center"
                onClick={handleOpenTermProjectModal}
              >
                <div id="se-text-block" className="project-title">
                  SE Term Project
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-7 text-center">
          <h2 className="custom-resume-mobile text-light">
            <u>Resume</u>
          </h2>
          <a
            href="https://drive.google.com/file/d/1RHPfRHy87UcJX7U2U20cm2NY68ydIrFi/view?usp=sharing"
            target="self"
          >
            <i className="mt-4 resume-icon far fa-file-pdf fa-10x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPageContent;
