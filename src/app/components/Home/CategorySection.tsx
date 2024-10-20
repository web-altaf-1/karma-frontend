import Image from "next/image";
import React from "react";
import Icon1 from "@/app/assets/mask-group.svg";
import AnalystIcon from "@/app/assets/icons/home/AnalystIcon";
import ElectricianIcon from "@/app/assets/icons/home/ElectricianIcon";
import FinanceIcon from "@/app/assets/icons/home/FinanceIcon";
import DesignIcon from "@/app/assets/icons/home/DesignIcon";
import TechnologyIcon from "@/app/assets/icons/home/TechnologyIcon";
import EngineeringIcon from "@/app/assets/icons/home/EngineeringIcon";
import MarketingIcon from "@/app/assets/icons/home/MarketingIcon";

const CategorySection = () => {
  const data = [
    {
      img: <DesignIcon />,
      name: "Design",
      text: "235 Jobs Available",
    },
    {
      img: <AnalystIcon />,
      name: "Analyst",
      text: "235 Jobs Available",
    },
    {
      img: <ElectricianIcon />,
      name: "Electrician",
      text: "235 Jobs Available",
    },
    {
      img: <FinanceIcon />,
      name: "Finance",
      text: "235 Jobs Available",
    },
    {
      img: <TechnologyIcon />,
      name: "Technology",
      text: "235 Jobs Available",
    },
    {
      img: <EngineeringIcon />,
      name: "Engineering",
      text: "235 Jobs Available",
    },
    {
      img: <MarketingIcon />,
      name: "Marketing",
      text: "235 Jobs Available",
    },
    {
      img: <TechnologyIcon />,
      name: "Programmer",
      text: "235 Jobs Available",
    },
  ];
  return (
    <div className="hot_jobs__section">
      <div className="main-container">
        <h3 className="hot_jobs_title">হট জবস</h3>
        <div className="main-container">
          <div className="category_container ">
            {data?.map((category, index) => {
              return (
                <div key={index} className="category__card">
                  {category?.img}
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
    </div>
  );
};

export default CategorySection;
