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
    <div className="overflow-y-scroll h-[88vh]">
      <div className="flex flex-row justify-evenly items-start flex-wrap h-[88vh] mt-[10px] overflow-y-scroll gap-x-[5px] gap-y-[10px]">
        {Object.keys(communities).length ? (
          communities.map((community) => {
            return <CommunityCard props={community} />;
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
      {Object.keys(communities).length ? (
        <div className="py-[15px] mycenter">
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
  );
};

export default CommunityLayout;
