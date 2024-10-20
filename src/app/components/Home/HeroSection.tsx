import Image from "next/image";
import React from "react";
import LocationIcon from "@/app/assets/icons/home/LocationIcon";
import HeroImage from '@/app/assets/images/home/hero.png'
const HeroSection = () => {
  return (
    <div className="hero__section">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__sub-title">
            480+ এর বেশি মানুষ একটি স্বপ্নের চাকরি পান
          </p>
          <h2 className="hero__title">পছন্দের চাকরিটি খুঁজুন!</h2>
          <p className="hero__desc">
            এবং যোগ্য কর্মী নিয়োগ করুন কর্মসংস্থান এর সাথে পার্টনারশিপের মাধ্যমে
            দক্ষ কর্মী খুজে নিন এবং চাকরি প্রত্যাশিদের নির্ভরযোগ্য নেটওয়ার্কে
            যুক্ত হউন
          </p>
          <div className="hero__search">
            <input
              placeholder="কীওয়ার্ড লিখুন..."
              className="hero__keyword-input"
            />
            <div className="hero__location-input">
              <LocationIcon width={18} height={18}/>
              <input type="text" className="input-main" placeholder="স্থান নির্বাচন করুন" />
            </div>
          </div>
          <ul className="hero__nav">
            <li className="hero__nav-list">
              <a href="" className="link">
                Designer
              </a>
            </li>
            <li className="hero__nav-list">
              <a href="" className="link">
                Developer
              </a>
            </li>
            <li className="hero__nav-list">
              <a href="" className="link">
                Tester
              </a>
            </li>
            <li className="hero__nav-list">
              <a href="" className="link">
                Writting
              </a>
            </li>
            <li className="hero__nav-list">
              <a href="" className="link">
                Project Manager
              </a>
            </li>
          </ul>
        </div>
        <div className="hero__thumb">
          <Image
            width={652}
            height={461}
            src={HeroImage}
            alt="hero-image"
            className="hero__thumb-img"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
