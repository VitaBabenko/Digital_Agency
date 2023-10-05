import { Link, useMatch } from "react-router-dom";

import styles from "./CustomLink.module.scss";

import PropTypes from "prop-types";

const CustomLink = ({ children, to }) => {
  const match = useMatch(to);

  return (
    <Link className={match ? styles.active : styles.not_active} to={to}>
      {children}
    </Link>
  );
};

CustomLink.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
};

export default CustomLink;
