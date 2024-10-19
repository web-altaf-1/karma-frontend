import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="hero_section">
      <div>
        <div>
            <p>480+ এর বেশি মানুষ একটি স্বপ্নের চাকরি পান</p>
        </div>
        <div>
            <div>
                <h1>পছন্দের চাকরিটি খুঁজুন!</h1>
                <p>এবং যোগ্য কর্মী নিয়োগ করুন কর্মসংস্থান এর সাথে পার্টনারশিপের মাধ্যমে দক্ষ কর্মী খুজে নিন এবং চাকরি প্রত্যাশিদের নির্ভরযোগ্য নেটওয়ার্কে যুক্ত হউন</p>
            </div>
            <div>
                <div>
                    <input type="text" placeholder="কীওয়ার্ড লিখুন..." />
                </div>
            </div>
        </div>
      </div>
      <div>
        <Image
          width={652}
          height={461}
          src="/images/hero.svg"
          alt="hero-image"
        />
      </div>
    </div>
  );
};

export default HeroSection;
