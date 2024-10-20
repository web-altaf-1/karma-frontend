import Image from "next/image";
import React from "react";
import MainLogoIcon from "@/app/assets/icons/home/MainLogoIcon";

const FooterSection = () => {
  return (
    <div className="footer__section ">
      <div className="main-container">
        <div className="footer__top">
          <div className="left-side">
            <MainLogoIcon />
            <p className="footer_desc">
              নিজেকে উন্নতির পথে এগিয়ে নিয়ে যাওয়া মানুষের সহজাত প্রবৃত্তি।
              স্ব-উন্নয়নে মনোযোগী হলে ভবিষ্যতে ব্যক্তি ও কর্মজীবনে ইতিবাচক
              ফলাফল আসে।
            </p>
          </div>
          <div>

          </div>
          <div className="right-side">
            <p className="newsletter-title">আমাদের নিউজলেটার সদস্যতা</p>
            <div className="newsletter-content">
              <input className="newsletter-input" type="email" name="email" id="email" placeholder="ইমেইল" />
              <button className="submit">সেভ করুন</button>
            </div>
          </div>
        </div>
        {/* <div className="footer_bottom">
        <div className="footer-navs"></div>
      </div> */}
      </div>
    </div>
  );
};

export default FooterSection;
