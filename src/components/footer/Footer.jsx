import CustomLink from "../customLink/CustomLink";

import icons from "../../images/sprite.svg";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.container}>
        <div className={styles.after_line}>
          <div className={styles.footer_links}>
            <svg
              aria-label="logo icon"
              width={100}
              height={30}
              className={styles.icon_logo}
            >
              <use href={icons + "#logo"}></use>
            </svg>
            <nav>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <CustomLink to="/">Home</CustomLink>
                </li>
                <li className={styles.item}>
                  <CustomLink to="/about">About us</CustomLink>
                </li>
                <li className={styles.item}>
                  <CustomLink to="/services">Services</CustomLink>
                </li>
                <li className={styles.item}>
                  <CustomLink to="/portfolio">Portfolio</CustomLink>
                </li>
                <li className={styles.item}>
                  <CustomLink to="/blog">Blog</CustomLink>
                </li>
                <li>
                  <CustomLink to="/contact"> Contact us</CustomLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className={styles.desktop_footer}>
          <ul className={styles.list_footer}>
            <li>
              <h3 className={styles.title}>Address:</h3>
              <address className={styles.desc}>
                27 Division St, New York,
                <br /> NY 10002, USA
              </address>
            </li>
            <li>
              <h3 className={styles.title}>Hit us up:</h3>
              <address className={styles.wrapper}>
                <a className={styles.desc} href="tel:+13447890768">
                  +1 344 789 07 68
                </a>
                <a className={styles.desc} href="mailto:info@sitename.com">
                  info@sitename.com
                </a>
              </address>
            </li>
            <li>
              <h3 className={styles.title}>useful links</h3>
              <div className={styles.wrapper}>
                <a className={styles.desc} href="*">
                  Help and Support
                </a>
                <a className={styles.desc} href="*">
                  Careers
                </a>
              </div>
            </li>
          </ul>
          <div className={styles.wrap_footer}>
            <ul className={styles.social_list}>
              <li className={styles.item}>
                <a
                  className={styles.social_item}
                  href="*"
                  target="blank"
                  rel="noopener"
                >
                  Fb
                </a>
              </li>
              <li className={styles.item}>
                <a
                  className={styles.social_item}
                  href="*"
                  target="blank"
                  rel="noopener"
                >
                  Tw
                </a>
              </li>
              <li>
                <a
                  className={styles.social_item}
                  href="*"
                  target="blank"
                  rel="noopener"
                >
                  In
                </a>
              </li>
            </ul>
            <p className={styles.footer_down}>
              &copy; All rights reserved. Digens 2020
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
