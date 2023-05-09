import { useContext, useEffect } from "react";
import NotificationLayout from "./Layouts/NotificationLayout";
import ProfileLayout from "./Layouts/ProfileLayout";
import { LogOutContext, SetLogOutContext, TabContext } from "./Layouts/Layout";
import FeedLayout from "./Layouts/FeedLayout";
import RoadmapLayout from "./Layouts/RoadmapLayout";
import SeriesLayout from "./Layouts/SeriesLayout";
import ShowLayout from "./Layouts/ShowLayout";
import CommunityLayout from "./Layouts/CommunityLayout";
import BookmarkLayout from "./Layouts/BookmarkLayout";

const Main = (): any => {
  const tab: any = useContext(TabContext);
  const logout: any = useContext(LogOutContext);
  const setLogOut: any = useContext(SetLogOutContext);
  useEffect(() => {
    if (!logout) {
      setLogOut(true);
    }

    console.log("onload main", logout);
  }, []);
  const navTabs = [
    "profile",
    "notification",
    "feed",
    "roadmap",
    "series",
    "show",
    "community",
    "bookmark",
  ];

  console.log("main", logout);

  if (!localStorage.getItem("key")) {
    console.log("nokey", localStorage.getItem("key"));
    if (navTabs.includes(tab)) {
      return <ProfileLayout />;
    }
  }

  if (localStorage.getItem("key") !== "") {
    console.log("key is", localStorage.getItem("key"));
    if (tab === "profile") {
      return <ProfileLayout />;
    }
    if (tab === "notification") {
      return <NotificationLayout />;
    }
    if (tab === "feed") {
      return <FeedLayout />;
    }
    if (tab === "roadmap") {
      return <RoadmapLayout />;
    }
    if (tab === "series") {
      return <SeriesLayout />;
    }
    if (tab === "show") {
      return <ShowLayout />;
    }
    if (tab === "community") {
      return <CommunityLayout />;
    }
    if (tab === "bookmark") {
      return <BookmarkLayout />;
    }
  }
};

export default Main;
