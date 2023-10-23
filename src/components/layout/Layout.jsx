import PropTypes from "prop-types";

import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({ isMobile }) => {
  return (
    <>
      <Header />
      <Sidebar isMobile={isMobile} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  isMobile: PropTypes.bool,
};

export default Layout;
