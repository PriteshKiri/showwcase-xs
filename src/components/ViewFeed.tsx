import { useEffect, useState } from "react";
import ThreadCard from "./ThreadCard";

const ViewFeed = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    async function fetchFeeds() {
      const response = await fetch(
        "https://cache.showwcase.com/feeds/discover?limit=50"
      );
      const data = await response.json();
      console.log(data);
      setFeed(data);
    }

    fetchFeeds();
  }, []);

  return (
    <div className="flex flex-col items-center h-[80vh] mt-[10px] overflow-y-scroll">
      {Object.keys(feed).length ? (
        feed.map((thread) => {
          return <ThreadCard props={thread} />;
        })
      ) : (
        <div className=" h-[100%] flex justify-center items-center p-[40px]">
          <div
            className="w-12 h-12 rounded-full animate-spin
          border-y border-solid border-white border-t-transparent shadow-md"
          ></div>
        </div>
      )}

      {Object.keys(feed).length ? (
        <div className="py-[15px]">
          <a
            href="https://www.showwcase.com/"
            className="sxs-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View more
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ViewFeed;
