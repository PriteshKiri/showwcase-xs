import { useEffect, useState } from "react";
import ThreadCard from "./ThreadCard";
import { useSnackbar } from "../util";
import SnackBar from "./SnackBar";

const ViewThread = () => {
  const [threads, setThreads] = useState([]);
  const { snackbar, showSnackbar }: any = useSnackbar();

  const username = localStorage.getItem("username");
  useEffect(() => {
    async function fetchFeeds() {
      const response = await fetch(
        `https://cache.showwcase.com/threads?username=${username}&limit=50`
      );
      const data = await response.json();
      const filtered = data.filter(
        (item: any) => item?.participants?.length === 0
      );

      setThreads(filtered);
    }

    fetchFeeds();
  }, []);
  return (
    <div className="flex flex-col items-center h-[83vh] mt-[10px] overflow-y-scroll">
      {snackbar && <SnackBar message={snackbar.message} />}

      {Object.keys(threads).length ? (
        threads.map((thread) => {
          return <ThreadCard props={thread} showSnackbar={showSnackbar} />;
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
        ""
      )}
    </div>
  );
};

export default ViewThread;
