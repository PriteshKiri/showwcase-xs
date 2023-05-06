import { useContext } from "react";
import NotificationLayout from "./Layouts/NotificationLayout";
import ProfileLayout from "./Layouts/ProfileLayout";
import { TabContext } from "./Layouts/Layout";
import FeedLayout from "./Layouts/FeedLayout";
import RoadmapLayout from "./Layouts/RoadmapLayout";
import SeriesLayout from "./Layouts/SeriesLayout";
import ShowLayout from "./Layouts/ShowLayout";
import CommunityLayout from "./Layouts/CommunityLayout";
import BookmarkLayout from "./Layouts/BookmarkLayout";

const Main = (): any => {
  const tab: any = useContext(TabContext);

  if (tab === "notification") {
    return <NotificationLayout />;
  }
  if (tab === "profile") {
    return <ProfileLayout />;
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
};

export default Main;
