import React from "react";
import { Link } from "react-router-dom";
import UpdateBioModal from "./modals/UpdateBioModal";
import UpdateProfilePicModal from "./modals/UpdateProfilePicModal";
import UpdateQuote from "./modals/UpdateQuote";
import GradPhoto from "../../../images/grad_photo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignLeft,
  faUser,
  faImage,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import "../../../styles/_sidebar.scss";

const SideBar = () => {
  return (
    <div>
      <UpdateBioModal />
      <UpdateProfilePicModal />
      <UpdateQuote />
      <div className="vertical-nav bg-dark">
        <div className="px-3 py-3 my-0 bg-dark text-light">
          <div className="media d-flex align-items-center">
            <img
              src={GradPhoto}
              alt=""
              width="60px"
              height=""
              className="rounded-lg shadow-lg mr-4"
            />
            <div className="media-body">
              <h4 className="m-0">Michael</h4>
              <p className="mb-0 te">Administrator</p>
            </div>
          </div>
        </div>

        <hr className="my-0 bg-light" />

        <p className="text-light my-2 pl-4 font-weight-bold text-uppercase">
          Panel
        </p>

        <ul className="nav flex-column">
          <li className="nav-item">
            <Link
              className="nav-link bg-light text-dark text-left shadow-lg"
              to="/"
            >
              <FontAwesomeIcon icon={faUser} size="1x" />
              View Profile
            </Link>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className="nav-link bg-light text-dark btn-block text-left shadow-lg"
              data-toggle="modal"
              data-target="#UpdateBioModal"
            >
              <FontAwesomeIcon icon={faAlignLeft} size="1x" />
              Update Info
            </button>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className="nav-link bg-light text-dark btn-block text-left shadow-lg"
              data-toggle="modal"
              data-target="#UpdateProfilePicture"
            >
              <FontAwesomeIcon icon={faImage} size="1x" />
              Update Profile Picture
            </button>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className="nav-link bg-light text-dark btn-block text-left shadow-lg"
              data-toggle="modal"
              data-target="#UpdateQuote"
            >
              <FontAwesomeIcon icon={faQuoteRight} size="1x" />
              Add Quote
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
