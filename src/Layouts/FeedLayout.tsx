import { useState } from "react";
import ViewFeed from "../components/ViewFeed";
import ViewThread from "../components/ViewThread";
import WriteThread from "../components/WriteThread";

const FeedLayout = () => {
  const [tabType, setTabType] = useState("feed");
  return (
    <div>
      <div className="feed-nav w-full flex justify-around items-center bdr-b ">
        <div
          className={`pt-[16px] pb-[10px] border-b-[2px] border-blue-400/0 cursor-pointer text-[12px] ${
            tabType === "feed" ? "border-blue-400/100" : ""
          }`}
          onClick={() => setTabType("feed")}
        >
          <p className="font-bold">Feeds</p>
        </div>
        <div
          className={`pt-[16px] pb-[10px] border-b-[2px] border-blue-400/0 cursor-pointer text-[12px] ${
            tabType === "thread" ? "border-blue-400/100" : ""
          }`}
          onClick={() => setTabType("thread")}
        >
          <p className="font-bold">My Threads</p>
        </div>
        <div
          className={`pt-[16px] pb-[10px] border-b-[2px] border-blue-400/0 cursor-pointer text-[12px] ${
            tabType === "write_thread" ? "border-blue-400/100" : ""
          }`}
          onClick={() => setTabType("write_thread")}
        >
          <p className="font-bold">Write Thread</p>
        </div>
      </div>
      {tabType === "feed" ? (
        <ViewFeed />
      ) : tabType === "thread" ? (
        <ViewThread />
      ) : (
        <WriteThread />
      )}
    </div>
  );
};

export default FeedLayout;
