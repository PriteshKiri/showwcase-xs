import { useEffect, useState } from "react";
import RoadmapCard from "../components/cards/RoadmapCard";
import { useSnackbar } from "../util";
import SnackBar from "../components/util/SnackBar";
import Loader from "../components/util/Loader";

const RoadmapLayout = () => {
  const [roadmaps, setRoadmaps] = useState([]);
  const { snackbar, showSnackbar }: any = useSnackbar();

  useEffect(() => {
    fetch("https://cache.showwcase.com/roadmaps")
      .then((response) => response.json())
      .then((response) => {
        if (!response.error) {
          setRoadmaps(response);
        }
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="overflow-y-scroll h-[91vh] flex flex-col">
      <div className="py-[15px] mycenter bdr-b ">
        <p className="text-[14px] font-bold text-center">
          Explore Roadmaps
        </p>
      </div>
      {snackbar && <SnackBar message={snackbar.message} type={snackbar.type} />}
      <div className="flex flex-col p-[10px] gap-y-[10px] h-[91vh]  overflow-y-scroll ">
        {Object.keys(roadmaps)?.length !== 0 ? (
          roadmaps.map((roadmap) => {
            return <RoadmapCard props={roadmap} showSnackbar={showSnackbar} />;
          })
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default RoadmapLayout;
