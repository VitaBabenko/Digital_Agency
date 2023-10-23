import PropTypes from "prop-types";

import Home from "../components/home/Home";

const HomePage = ({ isMobile }) => {
  return <Home isMobile={isMobile} />;
};

HomePage.propTypes = {
  isMobile: PropTypes.bool,
};

export default HomePage;
