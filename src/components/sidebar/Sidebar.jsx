import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.wrapper}>
      <a href="*" target="blank" rel="noopener">
        Fb
      </a>
      <a href="*" target="blank" rel="noopener">
        Tw
      </a>
      <a href="*" target="blank" rel="noopener">
        Ln
      </a>
    </div>
  );
};

export default Sidebar;
