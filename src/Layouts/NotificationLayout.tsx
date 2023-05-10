import { useEffect, useState } from "react";
import NotificationCard from "../components/NotificationCard";

const NotificationLayout = () => {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    fetch("https://cache.showwcase.com/notifications?limit=40", {
      method: "GET",
      headers: {
        "x-api-key": `${localStorage.getItem("key")}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (!response.error) {
          setNotifications(response);
        } else {
          console.log(response.error, "err");
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col items-center h-[88vh] mt-[10px] overflow-y-scroll">
      {Object.keys(notifications).length ? (
        notifications.map((thread) => {
          return <NotificationCard props={thread} />;
        })
      ) : (
        <div className=" h-[100%] flex justify-center items-center p-[40px]">
          <div
            className="w-12 h-12 rounded-full animate-spin
      border-y border-solid border-white border-t-transparent shadow-md"
          ></div>
        </div>
      )}

      {Object.keys(notifications).length ? (
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

export default NotificationLayout;
