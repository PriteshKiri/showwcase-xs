import { useEffect, useState } from "react";
import ThreadCard from "../components/ThreadCard";

const BookmarkLayout = () => {
  const [bookmarkThreads, setBookmarkThreads] = useState([]);

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
      {Object.keys(bookmarkThreads).length ? (
        bookmarkThreads.map((thread) => {
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
