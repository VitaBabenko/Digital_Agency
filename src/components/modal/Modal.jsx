import { NavLink } from "react-router-dom";

import PropTypes from "prop-types";

import iconClose from "../../images/closeIcon.svg";
import search from "../../images/search.svg";

import styles from "./Modal.module.scss";

const Modal = ({ setIsOpenModal }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <button
          type="button"
          className={styles.btn_close}
          onClick={() => setIsOpenModal(false)}
        >
          <img src={iconClose} alt="icon close" />
        </button>
        <nav className={styles.list}>
          <NavLink
            className={styles.item}
            to="/"
            onClick={() => setIsOpenModal(false)}
          >
            Home
          </NavLink>
          <NavLink
            className={styles.item}
            to="/about"
            onClick={() => setIsOpenModal(false)}
          >
            About us
          </NavLink>
          <NavLink
            className={styles.item}
            to="/services"
            onClick={() => setIsOpenModal(false)}
          >
            Services
          </NavLink>
          <NavLink
            className={styles.item}
            to="/serviceDetail"
            onClick={() => setIsOpenModal(false)}
          >
            Service detail
          </NavLink>
          <NavLink
            className={styles.item}
            to="/contact"
            onClick={() => setIsOpenModal(false)}
          >
            Contact us
          </NavLink>
        </nav>
        <form>
          <input className={styles.input} type="text" placeholder="Search" />
          <img className={styles.img_icon} src={search} alt="icon search" />
        </form>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  setIsOpenModal: PropTypes.func.isRequired,
};
