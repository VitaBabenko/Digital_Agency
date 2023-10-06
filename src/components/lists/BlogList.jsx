import PropTypes from "prop-types";

import styles from "./BlogList.module.scss";

const BlogList = ({ img, description, desc, icon, title }) => {
  return (
    <>
      <img src={img} alt="blog image" className={styles.img_blog} />
      <div className={styles.wrap}>
        <p className={styles.first_desc}>{description}</p>
        <p className={styles.second_desc}>{desc}</p>
        <svg aria-label="icons blog" width={18} height={18}>
          <use href={icon}></use>
        </svg>
      </div>
      <h3 className={styles.title}>{title}</h3>
    </>
  );
};

BlogList.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
  desc: PropTypes.node,
  icon: PropTypes.string,
  img: PropTypes.string,
};

export default BlogList;
