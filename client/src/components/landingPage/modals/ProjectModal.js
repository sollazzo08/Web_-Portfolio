import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import Carousel from "../carousel/Carousel";
import "../../../styles/_projectModal.scss";

const ProjectModal = ({ closeModal, openCela, openMisty, openTermProject, openRateMyDorm}) => {
  return (
    <div>
      <AnimatePresence>
        <motion.div
          className="custom-modal-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="custom-modal"
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{
              y: "150px",
              opacity: 1,
              transition: {
                delay: 0.5,
                ease: "backOut",
                duration: 0.8,
              },
            }}
          >
            <Carousel openCela={openCela} openMisty={openMisty} openTermProject={openTermProject} openRateMyDorm={openRateMyDorm}/>
          </motion.div>
          <div className="close">
            <FontAwesomeIcon icon={faWindowClose} onClick={closeModal} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProjectModal;
