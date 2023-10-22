import PropTypes from "prop-types";

import styles from "./Sidebar.module.scss";

const Sidebar = ({ isMobile }) => {
  return (
    <>
      {!isMobile && (
        <aside className={styles.wrapper}>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              <a
                href="*"
                target="blank"
                rel="noopener"
                className={styles.social}
              >
                Fb
              </a>
            </li>
            <li className={styles.list_item}>
              <a
                href="*"
                target="blank"
                rel="noopener"
                className={styles.social}
              >
                Tw
              </a>
            </li>
            <li>
              <a
                href="*"
                target="blank"
                rel="noopener"
                className={styles.social}
              >
                In
              </a>
            </li>
          </ul>
        </aside>
      )}
    </>
  );
};

Sidebar.propTypes = {
  isMobile: PropTypes.bool,
};

export default Sidebar;
