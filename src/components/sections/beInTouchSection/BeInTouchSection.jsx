import PropTypes from "prop-types";

import Button from "../../button/Button";

import icons from "../../../images/sprite.svg";

import styles from "./BeInTouchSection.module.scss";

const BeInTouchSection = ({ mobile }) => {
  return (
    <section className={styles.section_wrapper}>
      <div>
        <h2 className={styles.third_title}>Always Be in touch</h2>
        <p className={styles.desc_title}>
          Subscribe if you want always to be known about all the news and
          available propositions.
        </p>
      </div>
      <div className={styles.wrapper_position}>
        <input
          type="text"
          placeholder="Enter your email"
          className={styles.input}
        />
        {mobile && (
          <button type="button" className={styles.btn_send}>
            <svg
              aria-label="icon send"
              width={20}
              height={20}
              className={styles.icon_send}
            >
              <use href={icons + "#icon-send"}></use>
            </svg>
          </button>
        )}
        <label className={styles.label}>
          <input className={styles.checkbox} type="checkbox" />{" "}
          <span className={styles.fake}></span> I accept all{" "}
          <span className={styles.span}>Terms and Conditions</span>
        </label>
      </div>
      {!mobile && <Button type="submit">Subscribe</Button>}
    </section>
  );
};

BeInTouchSection.propTypes = {
  mobile: PropTypes.bool,
};

export default BeInTouchSection;
