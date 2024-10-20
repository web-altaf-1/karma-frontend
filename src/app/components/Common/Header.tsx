"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Image1 from "@/app/assets/logo.svg";
import MainLogoIcon from "@/app/assets/icons/home/MainLogoIcon";
import EmailIcon from "@/app/assets/icons/home/EmailIcon";
import LaborMarketIcon from "@/app/assets/icons/home/FacebookIcon";
import FacebookIcon from "@/app/assets/icons/home/FacebookIcon";
import TwitterIcon from "@/app/assets/icons/home/LinkedinIcon";
import LinkedinIcon from "@/app/assets/icons/home/LinkedinIcon";
import InstaIcon from "@/app/assets/icons/home/InstaIcon";
import MarketAnalysis from "@/app/assets/icons/home/MarketAnalysis";
import ELearningIcon from "@/app/assets/icons/home/ELearningIcon";
const Header = () => {
  const [language, setLanguage] = useState(true);

  return (
    <div>
      <div className="header__top">
        <div className="info_left">
          <p className="quesion">কোনো প্রশ্ন আছে কি?</p>
          <p className="info_email">
            <EmailIcon />
            info@karmasangsthan.com.bd
          </p>
        </div>
        <div className="info-right">
          <div className="social_btn_wrapper">
            <div className="social_btn">
              <FacebookIcon />
            </div>
            <div className="social_btn">
              <TwitterIcon />
            </div>
            <div className="social_btn">
              <LinkedinIcon />
            </div>
            <div className="social_btn">
              <InstaIcon />
            </div>
          </div>
          <div
            onClick={() => setLanguage(!language)}
            className="header__lang-switch"
          >
            <button
              className={`header__lang-switch-btn ${language ? "eng" : "bng"}`}
            >
              {language ? "ENG" : "বাংলা"}
            </button>
            <span className="ban">বাংলা</span>
            <span className="eng">ENG </span>
          </div>
        </div>
      </div>
      <div className="header__bottom">
        <div>
          <div className="logo">
            <MainLogoIcon></MainLogoIcon>
          </div>
        </div>
        <div className="header-nav-wrapper">
          <div className="nav-left">
            <div className="nav-item">
              <div className="first-logo">
                <MarketAnalysis width={20} height={20}></MarketAnalysis>
              </div>
              <Link href='#'>
                <p className="nav-text">শ্রম বাজার অনুসন্ধান করুন</p>
              </Link>
            </div>
            <div className="nav-item">
              <div className="second-logo">
                <ELearningIcon width={20} height={20} />
              </div>
              <Link href='#'>
                <p className="nav-text">ই-প্রশিক্ষণ</p>
              </Link>
            </div>
            <div className="nav-item">
              <div className="second-logo">
                <ELearningIcon width={20} height={20}></ELearningIcon>
              </div>
              <Link href='#'>
                <p className="nav-text">সেবা</p>
              </Link>
            </div>
          </div>
          <div className="nav-right">
            <Link href="/login">
              <p className="nav-text">লগইন করুন</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
