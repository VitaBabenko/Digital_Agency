import PropTypes from "prop-types";

import elements from "../../images/elements.svg";

import styles from "./ServicesList.module.scss";

const ServicesList = ({ icon, title, desc }) => {
  return (
    <div className={styles.wrap}>
      <img src={elements} alt="first elements" />
      <img className={styles.img_icon} src={icon} alt="icon first" />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{desc}</p>
    </div>
  );
};

ServicesList.propTypes = {
  title: PropTypes.node,
  desc: PropTypes.node,
  icon: PropTypes.element,
};

export default ServicesList;
