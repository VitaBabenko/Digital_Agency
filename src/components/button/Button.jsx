import PropTypes from "prop-types";

import styles from "./Button.module.scss";

const Button = ({ type, children }) => {
  return (
    <button className={styles.btn} type={type}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};

export default Button;
