import Button from "../button/Button";
import ServicesList from "../servicesList/ServicesList";

import icon from "../../images/Polygon.svg";
import icon1 from "../../images/icon1.svg";
import icon2 from "../../images/icon2.svg";
import icon3 from "../../images/icon3.svg";
import arrow from "../../images/Arrow-right.svg";
import arrowGrey from "../../images/Arrow-grey.svg";
import img1_desktop from "../../images/picture1_desktop.png";
import img2_desktop from "../../images/picture2_desktop.png";
import img3_desktop from "../../images/picture3_desktop.png";
import homeDesktop from "../../images/home_img_desktop.png";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.wrap_section}>
        <img className={styles.img_home} src={homeDesktop} alt="home image" />
        <p className={styles.first_word}>Digital</p>
        <p className={styles.word_home}>products</p>
        <p className={styles.word_big_home}>products</p>
        <div className={styles.wrap}>
          <img src={icon} alt="polygon icon" />
          <span className={styles.subtitle}>more than obvious</span>
        </div>
        <h1 className={styles.title}>Digital products for your brand</h1>
        <p className={styles.description}>
          Our team is waiting for a new challenge, so we`re ready to make a cook
          brand.
        </p>
        <Button type="button">Get More</Button>
      </section>

      <section className={styles.wrapper_section}>
        <div className={styles.content}>
          <div className={styles.wrap}>
            <img src={icon} alt="polygon icon" />
            <span className={styles.subtitle}>our services</span>
          </div>
          <h2 className={styles.second_title}>We Develop Digital Products</h2>
          <p className={styles.description}>
            You can discover all your services by clicking the link below.
          </p>
          <button className={styles.btn} type="button">
            View all
            <img src={arrow} alt="arrow right" />
          </button>
        </div>
        <div>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              <ServicesList
                icon={icon1}
                title="Web Development"
                desc="Our developers are carefully considering how your product should
              work while maintain..."
              />
            </li>
            <li className={styles.list_item}>
              <ServicesList
                icon={icon2}
                title="SEO optimization"
                desc="Promotion of your product is an important step in making money and
              constant popular..."
              />
            </li>
            <li className={styles.list_item}>
              <ServicesList
                icon={icon3}
                title="Ui/UX Design"
                desc="Everything starts with the beautiful. And professional design is
              of great importance..."
              />
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.wrap}>
          <img src={icon} alt="polygon icon" />
          <span className={styles.subtitle}>portfolio</span>
        </div>
        <h3 className={styles.title_black}>check our latest cases</h3>
        <button className={styles.btn_arrow} type="button">
          View all
          <img src={arrowGrey} alt="arrow right grey" />
        </button>
        <ul className={styles.img_list}>
          <li>
            <img src={img1_desktop} alt="first picture" />
          </li>
          <li>
            <img src={img2_desktop} alt="second picture" />
          </li>
          <li>
            <img src={img3_desktop} alt="third picture" />
          </li>
        </ul>
        <p className={styles.word}>cases</p>
        <p className={styles.back_word}>cases</p>
      </section>

      <section className={styles.wrap_section}>
        <div className={styles.wrap}>
          <img src={icon} alt="polygon icon" />
          <span className={styles.subtitle}>what we do</span>
        </div>
        <h2 className={styles.second_title}>We Develop Digital Products</h2>
        <p className={styles.description}>
          We appreciate every client and ready to help with all the issues that
          they have. Let`s figure out what we can do.
        </p>
      </section>
    </div>
  );
};

export default Home;
