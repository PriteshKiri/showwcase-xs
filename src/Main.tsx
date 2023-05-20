import { useContext, useEffect } from "react";
import NotificationLayout from "./layouts/NotificationLayout";
import ProfileLayout from "./layouts/ProfileLayout";
import {
  LogOutContext,
  SetLogOutContext,
  SideBarStatusContext,
  TabContext,
} from "./layouts/Layout";
import FeedLayout from "./layouts/FeedLayout";
import RoadmapLayout from "./layouts/RoadmapLayout";
import SeriesLayout from "./layouts/SeriesLayout";
import ShowLayout from "./layouts/ShowLayout";
import CommunityLayout from "./layouts/CommunityLayout";
import BookmarkLayout from "./layouts/BookmarkLayout";

const Main = (): any => {
  const tab: any = useContext(TabContext);
  const logout: any = useContext(LogOutContext);
  const setLogOut: any = useContext(SetLogOutContext);
  const open: any = useContext(SideBarStatusContext);
  useEffect(() => {
    if (!logout) {
      setLogOut(true);
    }

    // console.log("onload main", logout);
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

  // console.log("main", logout);

  if (!localStorage.getItem("sxs_key") && open) {
    // console.log("nokey", localStorage.getItem("sxs_key"));
    if (navTabs.includes(tab)) {
      return <ProfileLayout />;
    }
  }

  if (localStorage.getItem("sxs_key") !== "" && open) {
    // console.log("key is", localStorage.getItem("sxs_key"));
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
