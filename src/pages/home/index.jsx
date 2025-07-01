import React from "react";
import { Greeting, Footer, MiniCard, RecentOrder } from "../../pages/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faBarsProgress
} from "@fortawesome/free-solid-svg-icons";


function Home() {
  return (
    
      <section className="bg-[#1a1a1a] h-[calc(100vh-6rem)] flex gap-4 ">
        <div className="flex-[3] ">
          <Greeting />
          <div className="flex  gap-4 mt-4 mx-4">
              <MiniCard title="Total Sales" icon={ <FontAwesomeIcon icon={faBarsProgress} flip="both" style={{color: "#ffffff",}} />} number={512} footerNum={1.6} />
              <MiniCard title="Total Orders" icon={<FontAwesomeIcon icon={faBarsProgress}  flip="both" style={{color: "#ffffff",}}/>} number={16} footerNum={3.6}  />             
          </div>
         <RecentOrder/>
        </div>
        {/*  */}
        <div className="flex-[2] bg-[#1f1f1f]">
          <h1>Content</h1>
         
        </div>
        <Footer />
      </section>
    
  );
}

export default Home;
