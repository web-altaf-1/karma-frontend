import React from "react";
import Icon1 from "@/app/assets/industry/icons8-operation-64.svg";
import Image from "next/image";
const FunctionalArea = () => {
  const data = [
    {
      id: 1,
      icon: Icon1,
      text: "উৎপাদন/অপারেশন",
      value: 0,
    },
    {
      id: 2,
      icon: Icon1,
      text: "আতিথেয়তা/ভ্রমণ/পর্যটন",
      value: 0,
    },
    {
      id: 3,
      icon: Icon1,
      text: "সৌন্দর্যের যত্ন/স্বাস্থ্য",
      value: 0,
    },
    {
      id: 4,
      icon: Icon1,
      text: "অ্যাকাউন্টিং ও ফাইন্যান্স",
      value: 0,
    },
    {
      id: 5,
      icon: Icon1,
      text: "সেক্রেটারি/রিসেপশনিস্ট",
      value: 0,
    },
    {
      id: 6,
      icon: Icon1,
      text: "শিক্ষা/প্রশিক্ষণ",
      value: 0,
    },
    {
      id: 7,
      icon: Icon1,
      text: "কৃষি (উদ্ভিদ/প্রাণী/মাছ)",
      value: 0,
    },
    {
      id: 8,
      icon: Icon1,
      text: "ইলেকশিয়ান/নির্মাণ",
      value: 0,
    },
  ];
  return (
    <div className="functional__area">
      <div className="main-container">
        <h3 className="area-title" style={{ marginBottom: "70px" }}>
          ইন্ডাস্ট্রি অনুযায়ী চাকুরি BY <br /> <span>FUNCTIONAL AREA</span>
        </h3>
        <div className="functional-items">
          {data?.map((item, index) => {
            return (
              <div key={index} className="functional-item">
                <Image width={22} height={22} src={item?.icon} alt="icon" />
                <h4 className="item-text">{item?.text} ({item?.value})</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FunctionalArea;
