import { useEffect, useState } from "react";
import CommunityCard from "../components/cards/CommunityCard";
import Loader from "../components/util/Loader";

const CommunityLayout = () => {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    fetch("https://cache.showwcase.com/communities/suggested?limit=30")
      .then((response) => response.json())
      .then((response) => {
        if (!response.error) {
          setCommunities(response);
        }
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="overflow-y-scroll h-[91vh] flex flex-col">
      <div className="py-[15px] mycenter bdr-b ">
        <p className="text-[14px] font-bold text-center">Explore Communities</p>
      </div>
      <div className="flex flex-col h-[91vh]  overflow-y-scroll ">
        <div className="flex flex-row justify-evenly items-start flex-wrap mt-[10px] gap-x-[5px] gap-y-[10px]">
          {Object.keys(communities)?.length !== 0 ? (
            communities.map((community) => {
              return <CommunityCard props={community} />;
            })
          ) : (
            <Loader />
          )}
        </div>
        {Object.keys(communities)?.length !== 0 ? (
          <div className="py-[25px] mycenter">
            <a
              href="https://www.showwcase.com/communities"
              className="sxs-link hover:underline"
              target="_blank"
              rel="noopener noreferrer "
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

export default CommunityLayout;
