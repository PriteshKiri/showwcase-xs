import { useEffect, useState } from "react";
import ThreadCard from "./ThreadCard";

const ViewFeed = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    async function fetchFeeds() {
      const response = await fetch(
        "https://cache.showwcase.com/feeds/discover"
      );
      const data = await response.json();
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
        <p className="text-white">Loading...</p>
      )}

      {Object.keys(feed).length ? (
        <div className="py-[15px]">
          <a
            href="https://www.showwcase.com/"
            className="link"
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
