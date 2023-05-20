import { useEffect, useState } from "react";
import ThreadCard from "./cards/ThreadCard";
import { useSnackbar } from "../util";
import SnackBar from "./util/SnackBar";
import Loader from "./util/Loader";

const ViewFeed = () => {
  const [feed, setFeed] = useState([]);
  const { snackbar, showSnackbar }: any = useSnackbar();

  useEffect(() => {
    async function fetchFeeds() {
      const response = await fetch(
        "https://cache.showwcase.com/feeds/discover?limit=50"
      );
      const data = await response.json();

      setFeed(data);
    }

    fetchFeeds();
  }, []);

  return (
    <div className="flex flex-col items-center h-[84vh] pt-[10px] overflow-y-scroll">
      {snackbar && <SnackBar message={snackbar.message} type={snackbar.type} />}

      {Object.keys(feed)?.length !== 0 ? (
        feed.map((thread) => {
          return <ThreadCard props={thread} showSnackbar={showSnackbar} />;
        })
      ) : (
        <Loader />
      )}

      {Object.keys(feed)?.length !== 0 ? (
        <div className="py-[15px]">
          <a
            href="https://www.showwcase.com/"
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

export default ViewFeed;
