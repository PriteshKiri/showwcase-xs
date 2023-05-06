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
          className={`pt-4 pb-1 border-b-2 border-blue-400/0 ${
            tabType === "feed" ? "border-blue-400/100" : ""
          }`}
          onClick={() => setTabType("feed")}
        >
          <p>Feeds</p>
        </div>
        <div
          className={`pt-4 pb-1 border-b-2 border-blue-400/0 ${
            tabType === "thread" ? "border-blue-400/100" : ""
          }`}
          onClick={() => setTabType("thread")}
        >
          <p>Threads</p>
        </div>
        <div
          className={`pt-4 pb-1 border-b-2 border-blue-400/0 ${
            tabType === "write_thread" ? "border-blue-400/100" : ""
          }`}
          onClick={() => setTabType("write_thread")}
        >
          <p>Write Thread</p>
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
