import Image from "next/image";
import React from "react";
import Logo from '@/app/assets/logo.svg'

const FooterSection = () => {
  return (
    <div className="footer__section">
      <div className="footer__top">
        <div className="left-side">
          <Image className=""  src={Logo} alt="logo"/>
          <p>নিজেকে উন্নতির পথে এগিয়ে নিয়ে যাওয়া মানুষের সহজাত প্রবৃত্তি। স্ব-উন্নয়নে মনোযোগী হলে ভবিষ্যতে ব্যক্তি ও কর্মজীবনে ইতিবাচক ফলাফল আসে।</p>
        </div>
        <div className="right-side">
            <p>আমাদের নিউজলেটার সদস্যতা</p>
            <div>
                <input type="email" name="email" id="email" placeholder="ইমেইল" />
                <button>সেভ করুন</button>
            </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="footer-navs">
            
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
