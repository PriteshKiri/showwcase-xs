import { useEffect, useState } from "react";
import ThreadCard from "../components/cards/ThreadCard";
import { useSnackbar } from "../util";
import SnackBar from "../components/util/SnackBar";
import Loader from "../components/util/Loader";

const BookmarkLayout = () => {
  const [bookmarkThreads, setBookmarkThreads] = useState([]);
  const { snackbar, showSnackbar }: any = useSnackbar();

  useEffect(() => {
    fetch("https://cache.showwcase.com/bookmarks", {
      method: "GET",
      headers: {
        "x-api-key": `${localStorage.getItem("sxs_key")}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (!response.error) {
          setBookmarkThreads(response);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="overflow-y-scroll h-[91vh] flex flex-col">
      <div className="py-[15px] mycenter bdr-b ">
        <p className="text-[14px] font-bold text-center">Bookmarks</p>
      </div>
      <div className="flex flex-col items-center h-[91vh] pt-[10px] overflow-y-scroll">
        {snackbar && (
          <SnackBar message={snackbar.message} type={snackbar.type} />
        )}

        {Object.keys(bookmarkThreads)?.length !== 0 ? (
          bookmarkThreads.map((thread) => {
            return <ThreadCard props={thread} showSnackbar={showSnackbar} />;
          })
        ) : (
          <Loader />
        )}

        {Object.keys(bookmarkThreads)?.length !== 0 ? (
          <div className="pt-[15px] pb-[25px]">
            <a
              href="https://www.showwcase.com/bookmarks"
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
    </div>
  );
};

export default BookmarkLayout;
