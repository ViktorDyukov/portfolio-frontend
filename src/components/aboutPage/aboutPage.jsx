import React from "react";
import { Helmet } from "react-helmet";
import s from "./aboutPage.module.css";
import SocButton from "./socButton";
import InfoItem from "../_shared/infoItem/infoItem";

const AboutPage = () => {
  return (
    <div className={s.root}>
      <Helmet>
        <title>About Me - Ducov</title>
      </Helmet>
      <div className={s.header}>
        <div class={s.item_photo}>
          <img
            class={s.mainphoto}
            src={process.env.PUBLIC_URL + "/images/about.png"}
            alt=""
          />
        </div>
        <div class={s.item_text}>
          <div>
            <h1>UX Designer with the Passion for Technology</h1>
          </div>
          <div>
            <p>
              Hey, I'm Victor, a product designer based in Helsinki, Finland.
              Coming from a product management background, I firmly grasp the
              importance of applying human-centered design methods and processes
              to make informed decisions. I’m passionate about participating in
              all phases of creating a product—from discovery to delivery. I'm
              always trying to grow and learn something new.
            </p>
          </div>
          <div class={s.buttons}>
            <SocButton
              text="LinkedIn"
              icon={`${process.env.PUBLIC_URL}/icons/soc/halo.png`}
              link="https://www.linkedin.com/in/victorduco/"
            />
            <SocButton
              text="Instagram"
              icon={`${process.env.PUBLIC_URL}/icons/soc/love.png`}
              link="https://www.instagram.com/victorducov/"
            />
            <SocButton
              text="Download CV"
              icon={`${process.env.PUBLIC_URL}/icons/soc/smirking.png`}
              link="files/viktordyukov-cv.pdf"
            />
            <SocButton
              text="Send email"
              icon={`${process.env.PUBLIC_URL}/icons/soc/winking.png`}
              link="mailto:me@viktorducov.com"
            />
          </div>
        </div>
      </div>

      <div className={`all_pages_container ${s.content}`}>
        <InfoItem
          title="Experience"
          body="During the past 8+ years of working as a designer in diverse industries including FinTech, MedTech, SaaS, and Internal communication, I created UX for customers and users of companies from small startups to S&P 500 corporations."
        />
        <InfoItem
          title="Values"
          body="It's important for me that the work I do should have a positive impact on people and the world. There are more and more advanced technologies around us, and my role as a designer is to build the bridge between people and this new world of innovation."
        />
        <InfoItem
          title="Hobbies"
          body="I like coding. This website is the product of that hobby — I created it with Python (Django Rest API) and React. Now, I’m working on my personal AR project, a prototype of the app for Vuzix Smartglasses so I’m learning to create apps for Android. And yes, I do have a dream to find more hobbies that aren’t behind the keyboard."
        />
      </div>

      <div className={s.photos}></div>
    </div>
  );
};

export default AboutPage;
