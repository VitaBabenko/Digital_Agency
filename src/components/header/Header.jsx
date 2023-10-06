import { useState } from "react";
import { NavLink } from "react-router-dom";

import Modal from "../modal/Modal";

import icons from "../../images/sprite.svg";

import styles from "./Header.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.wrap_btn}>
          <button
            type="button"
            className={styles.btn_menu}
            onClick={() => setIsOpen(true)}
          >
            <svg aria-label="burger menu" className={styles.icon_burger}>
              <use href={icons + "#burger_menu"}></use>
            </svg>
          </button>
          {isOpen && <Modal setIsOpenModal={setIsOpen} />}
          <NavLink className={styles.btn} to="/">
            <svg aria-label="logo icon" className={styles.icon_logo}>
              <use href={icons + "#logo"}></use>
            </svg>
          </NavLink>
        </div>
        <div className={styles.wrap_phone}>
          <a href="tel:+15471258965" className={styles.icon}>
            <svg
              aria-label="phone icon"
              width={45}
              height={45}
              className={styles.icon_phone}
            >
              <use href={icons + "#phone"}></use>
            </svg>
            <svg
              aria-label="phone icon"
              width={45}
              height={45}
              className={styles.icon_phone_desktop}
            >
              <use href={icons + "#icon_phone_desktop"}></use>
            </svg>
            <p className={styles.btn_phone}>+1 547 125 89 65</p>
          </a>
          <button className={styles.btn_desktop} type="button">
            Get a quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
