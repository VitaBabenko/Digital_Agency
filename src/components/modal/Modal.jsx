import { NavLink } from "react-router-dom";

import PropTypes from "prop-types";

import icons from "../../images/sprite.svg";

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
          <svg
            aria-label="icon close"
            width={40}
            height={40}
            className={styles.icon_close}
          >
            <use href={icons + "#icon-close"}></use>
          </svg>
        </button>
        <nav className={styles.list}>
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
          <svg
            aria-label="icon search"
            width={20}
            height={20}
            className={styles.img_icon}
          >
            <use href={icons + "#search"}></use>
          </svg>
        </form>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  setIsOpenModal: PropTypes.func.isRequired,
};
