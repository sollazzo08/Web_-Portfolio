import React from "react";
import { motion } from "framer-motion";
import '../../../styles/_carouselContent.scss';
import "../../../styles/_projectModal.scss";

const Content = ({content, count}) => {

  const getTechStack = () => {
    if(count === 0){
      return (
        <div>
          <div className="header">Tech Stack</div>
          <div className="tech-stack">
            <ul>
              <li>{content.tech_stack.one}</li>
              <li>{content.tech_stack.two}</li>
              <li>{content.tech_stack.three}</li>
              <li>{content.tech_stack.four}</li>
            </ul>
          </div>
        </div>
      )

    }
  }

 

  return (
    <motion.div
      className="custom-carousel-content"
      initial={{ y: "1000px", opacity: 1 }}
      animate={{
        y: "-200px",
        transition: { duration: 1.4 },
        opactiy: 0,
      }}
     
    >
      <div className="header">{content.title}</div>
      <p className="desc">
        {content.description}
      </p>
      {getTechStack()}
    </motion.div>
  );
};

export default Content;