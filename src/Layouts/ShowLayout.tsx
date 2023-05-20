import { useEffect, useState } from "react";
import { useSnackbar } from "../util";
import SnackBar from "../components/util/SnackBar";
import ShowCard from "../components/cards/ShowCard";
import Loader from "../components/util/Loader";

const ShowLayout = () => {
  const [shows, setShows] = useState([]);
  const { snackbar, showSnackbar }: any = useSnackbar();

  useEffect(() => {
    fetch("https://cache.showwcase.com/projects/trending")
      .then((response) => response.json())
      .then((response) => {
        if (!response.error) {
          setShows(response);
        }
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="overflow-y-scroll h-[91vh] flex flex-col">
      <div className="py-[15px] mycenter bdr-b ">
        <p className="text-[14px] font-bold text-center">
          Explore Trending Shows
        </p>
      </div>
      {snackbar && <SnackBar message={snackbar.message} type={snackbar.type} />}
      <div className="flex flex-col h-[91vh]  overflow-y-scroll ">
        <div className="flex flex-col items-center justify-center p-[10px] gap-y-[10px]  ">
          {Object.keys(shows).length !== 0 ? (
            shows.map((show) => {
              return <ShowCard props={show} showSnackbar={showSnackbar} />;
            })
          ) : (
            <Loader />
          )}
        </div>

        {Object.keys(shows).length !== 0 ? (
          <div className="pb-[15px] mycenter">
            <a
              href="https://www.showwcase.com/"
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

export default ShowLayout;
