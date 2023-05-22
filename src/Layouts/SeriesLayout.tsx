import { useEffect, useState } from "react";
import { useSnackbar } from "../util";
import SnackBar from "../components/util/SnackBar";
import SeriesCard from "../components/cards/SeriesCard";
import Loader from "../components/util/Loader";

const SeriesLayout = () => {
  const [series, setSeries] = useState([]);
  const { snackbar, showSnackbar }: any = useSnackbar();

  useEffect(() => {
    fetch("https://cache.showwcase.com/series/featured")
      .then((response) => response.json())
      .then((response) => {
        if (!response.error) {
          setSeries(response);
        }
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="overflow-y-scroll h-[91vh] flex flex-col">
      <div className="py-[15px] mycenter bdr-b ">
        <p className="text-[14px] font-bold text-center">
          Explore Trending Series
        </p>
      </div>
      {snackbar && <SnackBar message={snackbar.message} type={snackbar.type} />}
      <div className="flex flex-col h-[91vh]  overflow-y-scroll ">
        <div className="flex flex-col items-center justify-center p-[10px] gap-y-[10px]  ">
          {Object.keys(series).length !== 0 ? (
            series.map((seriesItem) => {
              return (
                <SeriesCard props={seriesItem} showSnackbar={showSnackbar} />
              );
            })
          ) : (
            <Loader />
          )}
        </div>

        {Object.keys(series).length !== 0 ? (
          <div className="pb-[25px] pt-[5px] mycenter">
            <a
              href="https://www.showwcase.com/shows/series"
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

export default SeriesLayout;
