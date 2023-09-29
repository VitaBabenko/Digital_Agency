import { useState } from "react";
import Modal from "../modal/Modal";

import Burger from "../../images/burger.svg";
import Logo from "../../images/logo.svg";
import Phone from "../../images/smartphone.svg";

import styles from "./Header.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.wrap}>
        <button
          type="button"
          className={styles.btn_menu}
          onClick={() => setIsOpen(true)}
        >
          <img src={Burger} alt="burger menu" />
        </button>
        <button type="button" className={styles.btn}>
          <img src={Logo} alt="logo icon" />
        </button>
        <a href="tel:+15471258965" className={styles.icon}>
          <img src={Phone} alt="phone" />
          <p className={styles.btn_phone}>+1 547 125 89 65</p>
        </a>
        <button className={styles.btn_desktop} type="button">
          Get a quote
        </button>
      </div>
      {isOpen && <Modal setIsOpenModal={setIsOpen} />}
    </>
  );
};

export default Header;
