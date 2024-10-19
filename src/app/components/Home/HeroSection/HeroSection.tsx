import Image from "next/image";
import React from "react";


const HeroSection = () => {
  return (
    <div className="hero__section">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__sub-title">480+ এর বেশি মানুষ একটি স্বপ্নের চাকরি পান</p>
          <h2 className="hero__title">পছন্দের চাকরিটি খুঁজুন!</h2>
          <p className="hero__desc">এবং যোগ্য কর্মী নিয়োগ করুন কর্মসংস্থান এর সাথে পার্টনারশিপের মাধ্যমে দক্ষ কর্মী খুজে নিন এবং চাকরি প্রত্যাশিদের নির্ভরযোগ্য নেটওয়ার্কে যুক্ত হউন</p>
          <div className="hero__search">
            <input className="hero__keyword-input" />
            <div className="hero__location-input">
              <input type="text" className="input-main" />
            </div>
          </div>
          <ul className="hero__nav">
            <li className="hero__nav-list"><a href="" className="link">Design</a></li>
            <li className="hero__nav-list"><a href="" className="link">Design</a></li>
            <li className="hero__nav-list"><a href="" className="link">Design</a></li>
            <li className="hero__nav-list"><a href="" className="link">Design</a></li>
          </ul>
        </div>
        <div className="hero__thumb">
          <Image width={652} height={461}  src="/images/hero.svg" alt="hero-image" className="hero__thumb-img" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
