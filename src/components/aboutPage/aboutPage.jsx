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
            <h1>All about V/DUCOV also known as a Viktor</h1>
          </div>
          <div>
            <p>
              I joined the company right when Boosted was prepping to launch its
              2nd Gen Board. We quickly teamed up with a design agency (Ueno) to
              create a landing page for collecting pre-orders. We listed out
              product specs, slapped on a handful of sexy product renders and
              pushed go. We listed out product specs, slapped on a handful of
              sexy product renders and pushed go. We listed out product specs,
              slapped on a handful of sexy product renders and pushed go.
            </p>
          </div>
          <div class={s.buttons}>
            <SocButton
              text="LinkedIn"
              icon={`${process.env.PUBLIC_URL}/icons/soc/halo.png`}
              link="https://www.linkedin.com/in/viktordyukov/"
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
          title="weqwqwe"
          body="weqwqwe weqwqweweqwqwe weqwqweweqwqwe weqwqweweqwqwe weqwqweweqwqwe
            weqwqweweqwqwe weqwqweweqwqwe weqwqweweqwqwe weqwqweweqwqwe
            weqwqweweqwqwe weqwqwe"
        />
        <InfoItem
          title="weqwqwe"
          body="weqwqwe weqwqweweqwqwe weqwqweweqwqwe weqwqweweqwqwe weqwqweweqwqwe
            weqwqweweqwqwe weqwqweweqwqwe weqwqweweqwqwe weqwqweweqwqwe
            weqwqweweqwqwe weqwqwe"
        />
        <InfoItem
          title="weqwqwe"
          body="weqwqwe weqwqweweqwqwe weqwqweweqwqwe weqwqweweqwqwe weqwqweweqwqwe
            weqwqweweqwqwe weqwqweweqwqwe weqwqweweqwqwe weqwqweweqwqwe
            weqwqweweqwqwe weqwqwe"
        />
        <InfoItem
          title="weqwqwe"
          body="weqwqwe weqwqweweqwqwe weqwqweweqwqwe weqwqweweqwqwe weqwqweweqwqwe
            weqwqweweqwqwe weqwqweweqwqwe weqwqweweqwqwe weqwqweweqwqwe
            weqwqweweqwqwe weqwqwe"
        />
        <InfoItem
          title="weqwqwe"
          body="weqwqwe weqwqweweqwqwe weqwqweweqwqwe weqwqweweqwqwe weqwqweweqwqwe
            weqwqweweqwqwe weqwqweweqwqwe weqwqweweqwqwe weqwqweweqwqwe
            weqwqweweqwqwe weqwqwe"
        />
      </div>

      <div className={s.photos}></div>
    </div>
  );
};

export default AboutPage;
