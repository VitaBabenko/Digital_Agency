import PropTypes from "prop-types";

import styles from "./WhatWeDoList.module.scss";

const WhatWeDoList = ({ title, desc }) => {
  return (
    <>
      {/* <svg aria-label="icons services">
        <use href={icon}></use>
      </svg> */}
      <div className={styles.wrap}>
        <h3 className={styles.title_wrap}>{title}</h3>
        <p className={styles.description_wrap}>{desc}</p>
      </div>
    </>
  );
};

WhatWeDoList.propTypes = {
  title: PropTypes.node,
  desc: PropTypes.node,
  // icon: PropTypes.element,
};

export default WhatWeDoList;
