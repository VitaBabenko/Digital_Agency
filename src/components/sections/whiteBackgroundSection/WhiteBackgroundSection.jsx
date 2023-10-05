import PropTypes from "prop-types";

import styles from "./WhiteBackgroundSection.module.scss";

const WhiteBackgroundSection = ({ icon, link, img1, img2, img3 }) => {
  return (
    <section className={styles.section}>
      <div className={styles.desktop_wrap}>
        <div className={styles.wrap}>
          <svg aria-label="icon polygon" width={18} height={16}>
            <use href={icon}></use>
          </svg>
          <span className={styles.subtitle}>portfolio</span>
        </div>
        <div className={styles.desktop_wrap_title}>
          <h3 className={styles.title_black}>check our latest cases</h3>
          {link}
        </div>
      </div>
      <ul className={styles.img_list}>
        <li>
          <img src={img1} alt="first picture" className={styles.img_item} />
        </li>
        <li>
          <img src={img2} alt="second picture" className={styles.img_item} />
        </li>
        <li>
          <img src={img3} alt="third picture" className={styles.img_item} />
        </li>
      </ul>
    </section>
  );
};

WhiteBackgroundSection.propTypes = {
  link: PropTypes.node,
  img1: PropTypes.node,
  img2: PropTypes.node,
  img3: PropTypes.node,
  icon: PropTypes.string,
};

export default WhiteBackgroundSection;
