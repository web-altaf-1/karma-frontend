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
      name: "Analyst",
      text: "235 Jobs Available",
    },
    {
      img: Icon1,
      name: "Electrician",
      text: "235 Jobs Available",
    },
    {
      img: Icon1,
      name: "Finance",
      text: "235 Jobs Available",
    },
    {
      img: Icon1,
      name: "Technology",
      text: "235 Jobs Available",
    },
    {
      img: Icon1,
      name: "Engineering",
      text: "235 Jobs Available",
    },
    {
      img: Icon1,
      name: "Marketing",
      text: "235 Jobs Available",
    },
    {
      img: Icon1,
      name: "Programmer",
      text: "235 Jobs Available",
    },
  ];
  return (
    <div className="hot_jobs__section">
      <h3 className="hot_jobs_title">হট জবস</h3>
      <div className="main-container">
        <div className="category_container ">
          {data?.map((category, index) => {
            return (
              <div key={index} className="category__card">
                <Image className="image" width={48} height={48} src={category?.img} alt="" />
                <div>
                  <h2>{category?.name}</h2>
                  <p>{category?.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
