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
    <div className="flex flex-col items-center h-[100vh] overflow-y-scroll">
      {feed &&
        feed.map((thread) => {
          return <ThreadCard props={thread} />;
        })}
    </div>
  );
};

export default ViewFeed;
