import { useState } from "react";
import Modal from "../modal/Modal";

import icons from "../../images/sprite.svg";

import styles from "./Header.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <button
          type="button"
          className={styles.btn_menu}
          onClick={() => setIsOpen(true)}
        >
          <svg
            aria-label="burger menu"
            width={20}
            height={20}
            className={styles.icon_burger}
          >
            <use href={icons + "#burger_menu"}></use>
          </svg>
        </button>
        {isOpen && <Modal setIsOpenModal={setIsOpen} />}
        <button type="button" className={styles.btn}>
          <svg aria-label="logo icon" width={69} height={20}>
            <use href={icons + "#logo"}></use>
          </svg>
        </button>
        <a href="tel:+15471258965" className={styles.icon}>
          <svg
            aria-label="phone icon"
            width={45}
            height={45}
            className={styles.icon_phone}
          >
            <use href={icons + "#phone"}></use>
          </svg>
          <p className={styles.btn_phone}>+1 547 125 89 65</p>
        </a>
        <button className={styles.btn_desktop} type="button">
          Get a quote
        </button>
      </div>
    </div>
  );
};

export default Header;
