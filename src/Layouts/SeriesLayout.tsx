import { useEffect, useState } from "react";
import { useSnackbar } from "../util";
import SnackBar from "../components/SnackBar";
import SeriesCard from "../components/SeriesCard";

const SeriesLayout = () => {
  const [series, setSeries] = useState([]);
  const { snackbar, showSnackbar }: any = useSnackbar();

  useEffect(() => {
    fetch("https://cache.showwcase.com/series/featured")
      .then((response) => response.json())
      .then((response) => {
        if (!response.error) {
          console.log(response);
          setSeries(response);
        } else {
          console.log(response.error, "err");
        }
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="overflow-y-scroll h-[91vh] flex flex-col">
      <div className="py-[15px] mycenter bdr-b ">
        <h3>Explore our Series</h3>
      </div>
      {snackbar && <SnackBar message={snackbar.message} />}
      <div className="flex flex-col h-[91vh]  overflow-y-scroll ">
        <div className="flex flex-col items-center justify-center p-[10px] gap-y-[10px]  ">
          {Object.keys(series).length ? (
            series.map((seriesItem) => {
              return (
                <SeriesCard props={seriesItem} showSnackbar={showSnackbar} />
              );
            })
          ) : (
            <div className="h-[91vh] flex justify-center items-center p-[40px]">
              <div
                className="w-12 h-12 rounded-full animate-spin
border-y border-solid border-white border-t-transparent shadow-md"
              ></div>
            </div>
          )}
        </div>

        {Object.keys(series).length ? (
          <div className="pb-[15px] mycenter">
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
    </div>
  );
};

export default SeriesLayout;
