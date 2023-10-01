import Button from "../button/Button";
import ServicesList from "../servicesList/ServicesList";

import icons from "../../images/sprite.svg";

import img1_mobile from "../../images/picture1_mobile.jpg";
import img2_mobile from "../../images/picture2_mobile.jpg";
import img3_mobile from "../../images/picture3_mobile.jpg";
import img_touch from "../../images/image.jpg";
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
          <svg aria-label="icon polygon" width={18} height={16}>
            <use href={icons + "#polygon"}></use>
          </svg>
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
            <svg aria-label="icon polygon" width={18} height={16}>
              <use href={icons + "#polygon"}></use>
            </svg>
            <span className={styles.subtitle}>our services</span>
          </div>
          <h2 className={styles.second_title}>We Develop Digital Products</h2>
          <p className={styles.description}>
            You can discover all your services by clicking the link below.
          </p>
          <button className={styles.btn} type="button">
            View all
            <svg
              aria-label="icon arrow"
              className={styles.icon_arrow__white}
              width={30}
              height={20}
            >
              <use href={icons + "#arrow_right"}></use>
            </svg>
          </button>
        </div>
        <div>
          <ul className={styles.list}>
            <li className={styles.list_item}>
              <ServicesList
                icon={icons + "#services_1"}
                title="Web Development"
                desc="Our developers are carefully considering how your product should
              work while maintain..."
              />
            </li>
            <li className={styles.list_item}>
              <ServicesList
                icon={icons + "#services_2"}
                title="SEO optimization"
                desc="Promotion of your product is an important step in making money and
              constant popular..."
              />
            </li>
            <li className={styles.list_item}>
              <ServicesList
                icon={icons + "#services_3"}
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
          <svg aria-label="icon polygon" width={18} height={16}>
            <use href={icons + "#polygon"}></use>
          </svg>
          <span className={styles.subtitle}>portfolio</span>
        </div>
        <h3 className={styles.title_black}>check our latest cases</h3>
        <button className={styles.btn_arrow} type="button">
          View all
          <svg
            aria-label="icon arrow"
            width={30}
            height={20}
            className={styles.svg_arrow__black}
          >
            <use href={icons + "#arrow_right"}></use>
          </svg>
        </button>
        <ul className={styles.img_list}>
          <li>
            <img src={img1_mobile} alt="first picture" />
          </li>
          <li>
            <img src={img2_mobile} alt="second picture" />
          </li>
          <li>
            <img src={img3_mobile} alt="third picture" />
          </li>
        </ul>
        <p className={styles.word}>cases</p>
        <p className={styles.back_word}>cases</p>
      </section>

      <section className={styles.section_wrapper}>
        <h2 className={styles.third_title}>Always Be in touch</h2>
        <p className={styles.desc_title}>
          Subscribe if you want always to be known about all the news and
          available propositions.
        </p>
        <div className={styles.wrapper_position}>
          <input
            type="text"
            placeholder="Enter your email"
            className={styles.input}
          />
          <button className={styles.btn_send}>
            <svg
              aria-label="icon send"
              width={20}
              height={20}
              className={styles.icon_send}
            >
              <use href={icons + "#icon-send"}></use>
            </svg>
          </button>
          <label className={styles.label}>
            <input className={styles.checkbox} type="checkbox" /> I accept all{" "}
            <span className={styles.span}>Terms and Conditions</span>
          </label>
          <img src={img_touch} alt="image in touch" />
        </div>
      </section>

      <section className={styles.wrap_section}>
        <div className={styles.wrap}>
          <svg aria-label="icon polygon" width={18} height={16}>
            <use href={icons + "#polygon"}></use>
          </svg>
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
