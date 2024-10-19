import Image from "next/image";
import React from "react";
import Icon1 from "@/app/assets/mask-group.svg";

const CategorySection = () => {
  const data = [
    {
      img: Icon1,
      name: "Design",
      text: "235 Jobs Available",
    },
    {
      img: Icon1,
      name: "Design",
      text: "235 Jobs Available",
    },
    {
      img: Icon1,
      name: "Design",
      text: "235 Jobs Available",
    },
    {
      img: Icon1,
      name: "Design",
      text: "235 Jobs Available",
    },
    {
      img: Icon1,
      name: "Design",
      text: "235 Jobs Available",
    },
    {
      img: Icon1,
      name: "Design",
      text: "235 Jobs Available",
    },
    {
      img: Icon1,
      name: "Design",
      text: "235 Jobs Available",
    },
    {
      img: Icon1,
      name: "Design",
      text: "235 Jobs Available",
    },
  ];
  return (
    <div className="hot_jobs__section" >
      <h3 className="hot_jobs_title">হট জবস</h3>
      <div className="category_container main-container">
        {data?.map((category, index) => {
          return (
            <div key={index} className="category__card">
              <Image width={48} height={48} src={category?.img} alt="" />
              <div>
                <h2>{category?.name}</h2>
                <p>{category?.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySection;
