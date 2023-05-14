import { useEffect, useState } from "react";
import RoadmapCard from "../components/RoadmapCard";
import { useSnackbar } from "../util";
import SnackBar from "../components/SnackBar";

const RoadmapLayout = () => {
  const [roadmaps, setRoadmaps] = useState([]);
  const { snackbar, showSnackbar }: any = useSnackbar();

  useEffect(() => {
    fetch("https://cache.showwcase.com/roadmaps")
      .then((response) => response.json())
      .then((response) => {
        if (!response.error) {
          console.log(response);
          setRoadmaps(response);
        } else {
          console.log(response.error, "err");
        }
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="overflow-y-scroll h-[91vh] flex flex-col">
      <div className="py-[15px] mycenter bdr-b ">
        <h3>Explore our Roadmaps</h3>
      </div>
      {snackbar && <SnackBar message={snackbar.message} />}
      <div className="flex flex-col p-[10px] gap-y-[10px] h-[91vh]  overflow-y-scroll ">
        {Object.keys(roadmaps).length ? (
          roadmaps.map((roadmap) => {
            return <RoadmapCard props={roadmap} showSnackbar={showSnackbar} />;
          })
        ) : (
          <div className=" h-[100%] flex justify-center items-center p-[40px]">
            <div
              className="w-12 h-12 rounded-full animate-spin
    border-y border-solid border-white border-t-transparent shadow-md"
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoadmapLayout;
