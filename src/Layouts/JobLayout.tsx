import { useEffect, useState } from "react";
import { useSnackbar } from "../util";
import SnackBar from "../components/util/SnackBar";
import Loader from "../components/util/Loader";
import JobCard from "../components/cards/JobCard";
const JobLayout = () => {
  const [jobs, setJobs] = useState([]);
  const { snackbar, showSnackbar }: any = useSnackbar();

  useEffect(() => {
    fetch("https://cache.showwcase.com/jobs")
      .then((response) => response.json())
      .then((response) => {
        if (!response.error) {
          setJobs(response);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="overflow-y-scroll h-[91vh] flex flex-col">
      <div className="py-[15px] mycenter bdr-b ">
        <p className="text-[14px] font-bold text-center">
          Explore Trending Jobs
        </p>
      </div>
      {snackbar && <SnackBar message={snackbar.message} type={snackbar.type} />}

      <div className="flex flex-col h-[91vh]  overflow-y-scroll ">
        <div className="flex flex-col items-center justify-center p-[10px] gap-y-[10px]  ">
          {Object.keys(jobs).length !== 0 ? (
            jobs.map((job) => {
              return <JobCard props={job} showSnackbar={showSnackbar} />;
            })
          ) : (
            <Loader />
          )}
        </div>

        {Object.keys(jobs).length !== 0 ? (
          <div className="pb-[30px] pt-[10px] mycenter">
            <a
              href="https://www.showwcase.com/jobs"
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

export default JobLayout;
