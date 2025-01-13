import { useRef, useState } from "react";
import Img1 from "../../assets/831f0dfb2140b15ac2a576dce2815dbb.webp";
import Img2 from "../../assets/8773e37b3b00ecf58713cf6eebd2fdd3.webp";
import Img3 from "../../assets/404463b084c8dab1b5014cbbd3868be3.webp";
import Img4 from "../../assets/fda68141521785aad1dedea805cb6fa9.webp";
import Img5 from "../../assets/acad6821814c38a8be886b65b6a53737.webp";
import Img6 from "../../assets/c86cf8cf40fbba952fb5c31376e8486b.webp";
import { CiCalendar } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const thisWeekList = [
  {
    id: 1,
    img: Img1,
    tittle: "Múa rối nước",
    price: "330.000",
    date: "13 tháng 01 năm 2024",
  },
  {
    id: 2,
    img: Img2,
    tittle: "Múa rối nước",
    price: "330.000",
    date: "13 tháng 01 năm 2024",
  },
  {
    id: 3,
    img: Img3,
    tittle: "Múa rối nước",
    price: "330.000",
    date: "13 tháng 01 năm 2024",
  },
  {
    id: 4,
    img: Img4,
    tittle: "Múa rối nước",
    price: "330.000",
    date: "13 tháng 01 năm 2024",
  },
  {
    id: 5,
    img: Img5,
    tittle: "Múa rối nước",
    price: "330.000",
    date: "13 tháng 01 năm 2024",
  },
  {
    id: 6,
    img: Img6,
    tittle: "Múa rối nước",
    price: "330.000",
    date: "13 tháng 01 năm 2024",
  },
  {
    id: 7,
    img: Img2,
    tittle: "Múa rối nước",
    price: "330.000",
    date: "13 tháng 01 năm 2024",
  },
  {
    id: 8,
    img: Img5,
    tittle: "Múa rối nước",
    price: "330.000",
    date: "13 tháng 01 năm 2024",
  },
  {
    id: 9,
    img: Img6,
    tittle: "Múa rối nước",
    price: "330.000",
    date: "13 tháng 01 năm 2024",
  },
  {
    id: 10,
    img: Img1,
    tittle: "Múa rối nước",
    price: "330.000",
    date: "13 tháng 01 năm 2024",
  },
];

const TabEvent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -1264, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 1264, behavior: "smooth" });
    }
  };

  const tabs = [
    { label: "Tuần này", content: "Content for Tab 1" },
    { label: "Tháng này", content: "Content for Tab 2" },
  ];

  return (
    <div className=" mx-4 my-8 lg:mx-14">
      {/* Tab Headers */}
      <div className="flex gap-4 border-gray-300">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-2 text-sm font-medium focus:outline-none ${
              activeTab === index
                ? "text-white border-b-2 border-pse-green transition-all duration-300"
                : "text-white border-b-2 border-transparent hover:text-pse-green"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      <div className="relative">
        <div
          ref={containerRef}
          className=" pt-4 pb-2 flex overflow-x-auto lg:overflow-x-hidden gap-4"
        >
          {thisWeekList.map((item) => (
            <div>
              <div className="w-[300px]">
                <img className="rounded-lg" src={item.img} />
                <div className="mt-2">{item.tittle}</div>
                <div className="text-pse-green">Từ {item.price}đ</div>
                <div className="flex items-center gap-1">
                  <span>
                    <CiCalendar size={18} />
                  </span>
                  {item.date}
                </div>
              </div>
              <div
                onClick={scrollLeft}
                className="absolute hidden lg:block bg-black/60 top-[30%] cursor-pointer p-2 left-0"
              >
                <FaAngleLeft size={20} />
              </div>
              <div
                onClick={scrollRight}
                className="absolute hidden lg:block bg-black/60 top-[30%] cursor-pointer p-2 right-0"
              >
                <FaAngleRight size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabEvent;