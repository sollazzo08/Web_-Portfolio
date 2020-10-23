import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Carousel from "../carousel/Carousel";
import "../../../styles/_projectModal.scss";

const ProjectModal = ({ closeModal, openCela, openMisty, openTermProject, openRateMyDorm}) => {
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
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
                delay: 0.1,
                ease: "backOut",
                duration: 1.3,
              },
            }}
          exit={{ y: "-100vh", opacity: 0 }}
          >
            <Carousel openCela={openCela} openMisty={openMisty} openTermProject={openTermProject} openRateMyDorm={openRateMyDorm} closeModal={closeModal}/>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProjectModal;
