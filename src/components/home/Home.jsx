import { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";

import Button from "../button/Button";
import ServicesList from "../lists/ServicesList";
import WhatWeDoList from "../lists/WhatWeDoList";
import BlogList from "../lists/BlogList";
import WhiteBackgroundSection from "../sections/whiteBackgroundSection/WhiteBackgroundSection";
import BeInTouchSection from "../sections/beInTouchSection/BeInTouchSection";

import icons from "../../images/sprite.svg";

import img1_mobile from "../../images/picture1_mobile.jpg";
import img2_mobile from "../../images/picture2_mobile.jpg";
import img3_mobile from "../../images/picture3_mobile.jpg";
import img_blog_1 from "../../images/blog_1.jpg";
import img_blog_2 from "../../images/blog_2.jpg";
import homeDesktop from "../../images/home_img_desktop.png";
import image from "../../images/image.jpg";

import styles from "./Home.module.scss";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1919);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.wrap_section}>
        <img className={styles.img_home} src={homeDesktop} alt="home image" />
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
          <NavLink className={styles.btn} to="/services">
            View all{" "}
            <svg
              aria-label="icon arrow"
              className={styles.icon_arrow__white}
              width={30}
              height={20}
            >
              <use href={icons + "#arrow_right"}></use>
            </svg>
          </NavLink>
        </div>
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
      </section>

      <WhiteBackgroundSection
        icon={icons + "#polygon"}
        link={
          <NavLink className={styles.btn_arrow} to="/portfolio">
            View all{" "}
            <svg
              aria-label="icon arrow"
              className={styles.svg_arrow__black}
              width={30}
              height={20}
            >
              <use href={icons + "#arrow_right"}></use>
            </svg>
          </NavLink>
        }
        img1={img1_mobile}
        img2={img2_mobile}
        img3={img3_mobile}
      />
      <BeInTouchSection mobile={isMobile} />
      <section className={styles.desktop_wrap}>
        {isMobile ? (
          <span className={styles.back_wrap}></span>
        ) : (
          <img src={image} alt="image photo" className={styles.desktop_img} />
        )}
        <div className={styles.wrap_section__we}>
          <div className={styles.wrap}>
            <svg aria-label="icon polygon" width={18} height={16}>
              <use href={icons + "#polygon"}></use>
            </svg>
            <span className={styles.subtitle}>what we do</span>
          </div>
          <h2 className={styles.second_title}>We Develop Digital Products</h2>
          <p className={styles.description}>
            We appreciate every client and ready to help with all the issues
            that they have. Let`s figure out what we can do.
          </p>
          <ul className={styles.list_second}>
            <li className={styles.list_item_second}>
              <WhatWeDoList
                // icon={icons + "#branding_63"}
                title="Branding"
                desc="This is a repetition in plastic forms, lines and colors of"
              />
            </li>
            <li className={styles.list_item_second}>
              <WhatWeDoList
                // icon={icons + "#strategy_87"}
                title="Strategy"
                desc="This is a repetition in plastic forms, lines and colors of"
              />
            </li>
            <li className={styles.list_item_second}>
              <WhatWeDoList
                // icon={icons + "#icon-85"}
                title="ECommerce"
                desc="This is a repetition in plastic forms, lines and colors of"
              />
            </li>
            <li className={styles.list_item_second}>
              <WhatWeDoList
                // icon={icons + "#support_99"}
                title="Support"
                desc="This is a repetition in plastic forms, lines and colors of"
              />
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.wrap_section_blog}>
        <div className={styles.wrap}>
          <svg aria-label="icon polygon" width={18} height={16}>
            <use href={icons + "#polygon"}></use>
          </svg>
          <span className={styles.subtitle}>blog</span>
        </div>
        <div className={styles.desktop_title_wrap}>
          <h2 className={styles.second_title}>the latest news in digens</h2>
          <NavLink className={styles.btn_blog} to="/blog">
            Read blog{" "}
            <svg
              aria-label="icon arrow"
              className={styles.icon_arrow__white}
              width={30}
              height={20}
            >
              <use href={icons + "#arrow_right"}></use>
            </svg>
          </NavLink>
        </div>
        <ul className={styles.blog_list}>
          <li className={styles.blog_list_item}>
            <BlogList
              img={img_blog_1}
              description="Laura Poliquine"
              desc="Nov 17, 2020"
              icon={icons + "#icon_blog"}
              title="the top places for inspiration to have a rest and create some..."
            />
          </li>
          <li className={styles.blog_list_item}>
            <BlogList
              img={img_blog_2}
              description="Laura Poliquine"
              desc="Oct 17, 2020"
              icon={icons + "#icon_blog"}
              title="how to create beautiful gifts for people you love this new year"
            />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
