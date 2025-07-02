import React from "react";
import { Greeting, Footer, MiniCard, RecentOrder } from "../../pages/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsProgress } from "@fortawesome/free-solid-svg-icons";
import PopularDish from "../../components/popularDish";

function Home() {
  return (
    <section className="bg-[#1a1a1a]  flex gap-4 border-t border-gray-50/90 pt-2   ">
      <div className="flex-[3] ">
        <Greeting />
        <div className="flex  gap-4 mt-4 mx-4">
          <MiniCard
            title="Total Sales"
            icon={
              <FontAwesomeIcon
                icon={faBarsProgress}
                flip="both"
                style={{ color: "#ffffff" }}
              />
            }
            number={512}
            footerNum={1.6}
          />
          <MiniCard
            title="Total Orders"
            icon={
              <FontAwesomeIcon
                icon={faBarsProgress}
                flip="both"
                style={{ color: "#ffffff" }}
              />
            }
            number={16}
            footerNum={3.6}
          />
        </div>
        <RecentOrder />
      </div>
      {/*  */}
      <div className="flex-[2] bg-[#1f1f1f]">
        <PopularDish />
      </div>
      <Footer />
    </section>
  );
}

export default Home;
