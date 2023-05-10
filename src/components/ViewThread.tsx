import { useEffect, useState } from "react";
import ThreadCard from "./ThreadCard";

const ViewThread = () => {
  const [threads, setThreads] = useState([]);

  const username = localStorage.getItem("username");
  useEffect(() => {
    async function fetchFeeds() {
      const response = await fetch(
        `https://cache.showwcase.com/threads?username=${username}&limit=50`
      );
      const data = await response.json();
      const filtered = data.filter(
        (item: any) => item.participants.length === 0
      );
      console.log(filtered);
      setThreads(filtered);
    }

    fetchFeeds();
  }, []);
  return (
    <div className="flex flex-col items-center h-[83vh] mt-[10px] overflow-y-scroll">
      {Object.keys(threads).length ? (
        threads.map((thread) => {
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

      {Object.keys(threads).length ? (
        <div className="py-[15px]">
          <a
            href={`https://www.showwcase.com/${username}`}
            className="sxs-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View more
          </a>
        </div>
      ) : (
        "NO threads"
      )}
    </div>
  );
};

export default ViewThread;
