import React from "react";
import GooglePlay from "@/app/assets/app/google-play-icon.svg";
import AppStore from "@/app/assets/app/apple.svg";
import Link from "next/link";
import Image from "next/image";

const AppSection = () => {
  return (
    <div className="looking__expert app-section">
      <div className="expert-wrapper second-container">
        <div className="expert-content">
          <h2 className="content-title">
            কর্মসংস্থান অ্যাপ এর সাহায্যে চাকরি খুঁজুন এবং আপনার ক্যারিয়ার
            উন্নয়ন করুন
          </h2>
          <p className="sub-text">
            কর্মসংস্থান বাংলাদেশের সর্বপ্রথম লেবার মার্কেট ম্যাচিং প্ল্যাটফর্ম
            যা আপনাকে চাকরি খুঁজতে এবং ক্যারিয়ার উন্নয়নে সহায়তা করে
          </p>
        </div>
        <div className="app-btns">
          <Link className="btn-link" href="#">
            <Image width={41.46} height={46} src={GooglePlay} alt="" />
            <div>
              <p className="btn-sub-text">GET IT ON </p>
              <p className="btn-main-text">Google Play</p>
            </div>
          </Link>
          <Link className="btn-link" href="#">
            <Image width={41.46} height={46} src={AppStore} alt="" />
            <div>
              <p className="btn-sub-text">Download on the</p>
              <p className="btn-main-text">Apple Store</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
