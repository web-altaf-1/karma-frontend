import React from "react";
import Image1 from "@/app/assets/industry/info-web-design.svg";
import Image from "next/image";
import Link from "next/link";
const SearchByIndustry = () => {
  const data = [
    {
      title: "ইনফরমেশন টেকনোলজি ",
      cate: [
        {
          icon: Image1,
          title: "ওয়েব ডিজাইনার",
        },
        {
          icon: Image1,
          title: "কম্পিউটার অপারেটর",
        },
        {
          icon: Image1,
          title: "আইটি সাপোর্ট টেকনিশিয়ান",
        },
      ],
    },
    {
      title: "তৈরি পোশাক",
      cate: [
        {
          icon: Image1,
          title: "অ্যাপারেল স্ক্রিন প্রিন্টার",
        },
        {
          icon: Image1,
          title: "সুইং মেশিন অপারেটর",
        },
        {
          icon: Image1,
          title: "সার্কুলার নিটিং মেশিন অপারেটর",
        },
      ],
    },
    {
      title: "ইনফরমাল",
      cate: [
        {
          icon: Image1,
          title: "বিউটিশিয়ান",
        },
        {
          icon: Image1,
          title: "টিভি সার্ভিসিং মেকানিক",
        },
        {
          icon: Image1,
          title: "সোলার সিস্টেম টেকনিশিয়ান",
        },
      ],
    },
    {
      title: "লাইট ইঞ্জিনিয়ারিং ",
      cate: [
        {
          icon: Image1,
          title: "ফাউন্ড্রি ওয়ার্কার",
        },
        {
          icon: Image1,
          title: "ওয়েব ডিজাইনার",
        },
        {
          icon: Image1,
          title: "কনজ্যুমার ইলেকট্রনিক্স মেকানিক",
        },
      ],
    },
    {
      title: "চামড়া এবং চামড়াজাত পণ্য",
      cate: [
        {
          icon: Image1,
          title: "মেশিন অপারেটর (ফুটওয়্যার)",
        },
        {
          icon: Image1,
          title: "সুইং মেশিন অপারেটর",
        },
        {
          icon: Image1,
          title: "মেশিন অপারেটর (ট্যানারি)",
        },
      ],
    },
    {
      title: "ট্রান্সপোর্ট ইকুইপমেন্ট",
      cate: [
        {
          icon: Image1,
          title: "ওয়েল্ডার",
        },
        {
          icon: Image1,
          title: "মেশিন ফিটার",
        },
        {
          icon: Image1,
          title: "অটোমেটিভ মেকানিক",
        },
      ],
    },
  ];
  return (
    <div className="industry__container main-container">
      <h3 className="search_industry_title" style={{ marginBottom: "70px" }}>
        ইন্ডাস্ট্রি অনুযায়ী <span>চাকুরী</span> অনুসন্ধান <br /> করুন{" "}
      </h3>
      <div className="all-industry">
        {data?.map((industry, index) => {
          return (
            <div key={index} className="single-industry">
              <h3 className="title">{industry?.title} </h3>
              {industry?.cate?.map((cate, index) => (
                <div key={index} className="sub-category">
                  <Image width={22} height={22} src={cate?.icon} alt="" />
                  <h4>{cate?.title}</h4>
                </div>
              ))}
              <Link className="see-more-btn" href="#">
                আরও দেখুন
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchByIndustry;
