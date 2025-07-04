import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { OrderList } from "../../pages/index";

function RecentOrder() {
  return (
    <div className="px-6">
      <div className="bg-[#0a0a0a] w-full p-5 rounded-lg  my-6 ">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-[#f5f5f5] text-lg font-semibold">Recent Order</h1>
          <a href="/" className="text-[#f6b100] font-semibold text-sm">
            View All
          </a>
        </div>
        <div className="flex items-center gap-2 bg-[#1f1f1f] rounded-md px-4 py-2 ">
          <FontAwesomeIcon icon={faSearch} className="text-white text-2xl" />
          <input
            type="text"
            placeholder="Search Recent Order"
            className="w-full p-2 rounded-md bg-transparent outline-none text-white"
          />
        </div>
        <div className="mt-4 px-6 h-[500px] overflow-y-scroll  scrollbar-hide ">
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
          <OrderList />
        </div>
      </div>
    </div>
  );
}

export default RecentOrder;
