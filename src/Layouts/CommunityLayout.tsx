import { useEffect, useState } from "react";
import CommunityCard from "../components/CommunityCard";

const CommunityLayout = () => {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    fetch("https://cache.showwcase.com/communities/suggested")
      .then((response) => response.json())
      .then((response) => {
        if (!response.error) {
          console.log(response);
          setCommunities(response);
        } else {
          console.log(response.error, "err");
        }
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="overflow-y-scroll h-[91vh] flex flex-col">
      <div className="py-[15px] mycenter bdr-b ">
        <h3>Explore our Communites</h3>
      </div>
      <div className="flex flex-col h-[91vh]  overflow-y-scroll ">
        <div className="flex flex-row justify-evenly items-start flex-wrap mt-[10px] gap-x-[5px] gap-y-[10px]">
          {Object.keys(communities).length ? (
            communities.map((community) => {
              return <CommunityCard props={community} />;
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
        {Object.keys(communities).length ? (
          <div className="py-[15px] mycenter">
            <a
              href="https://www.showwcase.com/communities"
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

export default CommunityLayout;
