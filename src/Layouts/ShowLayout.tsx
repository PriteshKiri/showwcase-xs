import { useEffect, useState } from "react";
import { useSnackbar } from "../util";
import SnackBar from "../components/SnackBar";
import ShowCard from "../components/ShowCard";

const ShowLayout = () => {
  const [shows, setShows] = useState([]);
  const { snackbar, showSnackbar }: any = useSnackbar();

  useEffect(() => {
    fetch("https://cache.showwcase.com/projects/trending")
      .then((response) => response.json())
      .then((response) => {
        if (!response.error) {
          console.log(response);
          setShows(response);
        } else {
          console.log(response.error, "err");
        }
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="overflow-y-scroll h-[91vh] flex flex-col">
      <div className="py-[15px] mycenter bdr-b ">
        <h3>Explore our Trending Shows</h3>
      </div>
      {snackbar && <SnackBar message={snackbar.message} />}
      <div className="flex flex-col h-[91vh]  overflow-y-scroll ">
        <div className="flex flex-col items-center justify-center p-[10px] gap-y-[10px]  ">
          {Object.keys(shows).length ? (
            shows.map((show) => {
              return <ShowCard props={show} showSnackbar={showSnackbar} />;
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

        {Object.keys(shows).length ? (
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

export default ShowLayout;
