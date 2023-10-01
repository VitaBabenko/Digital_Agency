import PropTypes from "prop-types";

import styles from "./ServicesList.module.scss";

const ServicesList = ({ icon, title, desc }) => {
  return (
    <>
      <svg
        aria-label="icons services"
        width={125}
        height={95}
        className={styles.icon_wrap}
      >
        <use href={icon}></use>
      </svg>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{desc}</p>
    </>
  );
};

ServicesList.propTypes = {
  title: PropTypes.node,
  desc: PropTypes.node,
  icon: PropTypes.element,
};

export default ServicesList;
