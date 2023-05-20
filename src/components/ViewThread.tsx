import { useEffect, useState } from "react";
import ThreadCard from "./cards/ThreadCard";
import { useSnackbar } from "../util";
import SnackBar from "./util/SnackBar";
import Loader from "./util/Loader";

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
    <div className="flex flex-col items-center h-[83vh] pt-[10px] overflow-y-scroll">
      {snackbar && <SnackBar message={snackbar.message} type={snackbar.type} />}

      {Object.keys(threads)?.length !== 0 ? (
        threads.map((thread) => {
          return <ThreadCard props={thread} showSnackbar={showSnackbar} />;
        })
      ) : (
        <Loader />
      )}

      {Object.keys(threads)?.length !== 0 ? (
        <div className="py-[15px]">
          <a
            href={`https://www.showwcase.com/${username}`}
            className="sxs-link hover:underline"
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
