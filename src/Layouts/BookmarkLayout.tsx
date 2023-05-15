import { useEffect, useState } from "react";
import ThreadCard from "../components/ThreadCard";
import { useSnackbar } from "../util";
import SnackBar from "../components/SnackBar";

const BookmarkLayout = () => {
  const [bookmarkThreads, setBookmarkThreads] = useState([]);
  const { snackbar, showSnackbar }: any = useSnackbar();

  useEffect(() => {
    fetch("https://cache.showwcase.com/bookmarks", {
      method: "GET",
      headers: {
        "x-api-key": `${localStorage.getItem("key")}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (!response.error) {
          console.log(response);
          setBookmarkThreads(response);
        } else {
          console.log(response.error, "err");
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col items-center h-[88vh] mt-[10px] overflow-y-scroll">
      {snackbar && <SnackBar message={snackbar.message} />}

      {Object.keys(bookmarkThreads).length ? (
        bookmarkThreads.map((thread) => {
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

      {Object.keys(bookmarkThreads).length ? (
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

export default BookmarkLayout;
