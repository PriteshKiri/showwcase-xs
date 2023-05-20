import { useEffect, useState } from "react";
import NotificationCard from "../components/cards/NotificationCard";
import Loader from "../components/util/Loader";

const NotificationLayout = () => {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    fetch("https://cache.showwcase.com/notifications?limit=40", {
      method: "GET",
      headers: {
        "x-api-key": `${localStorage.getItem("sxs_key")}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (!response.error) {
          setNotifications(response);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="overflow-y-scroll h-[91vh] flex flex-col">
      <div className="py-[15px] mycenter bdr-b">
        <p className="text-white text-[14px] font-bold text-center">
          Notifications
        </p>
      </div>
      <div className="flex flex-col items-center h-[91vh] pt-[10px] overflow-y-scroll">
        {Object.keys(notifications)?.length !== 0 ? (
          notifications.map((thread) => {
            return <NotificationCard props={thread} />;
          })
        ) : (
          <Loader />
        )}

        {Object.keys(notifications)?.length !== 0 ? (
          <div className="py-[15px]">
            <a
              href="https://www.showwcase.com/notifications"
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

export default NotificationLayout;
