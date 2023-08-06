import { useEffect, useState } from "react";
import { useSnackbar } from "../util";
import SnackBar from "../components/util/SnackBar";
import ShowCard from "../components/cards/ShowCard";
import Loader from "../components/util/Loader";
const ShowLayout = () => {
  const [shows, setShows] = useState([]);
  const { snackbar, showSnackbar }: any = useSnackbar();
  const [showId, setShowID] = useState("");
  const [showView, setShowView] = useState(false);
  const [showContent, setShowContent]: any = useState();
  const [imgErr, setImgErr] = useState(false);

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

  useEffect(() => {
    if (showView) {
      fetch(`https://cache.showwcase.com/projects/${showId}`)
        .then((response) => response.json())
        .then((response) => {
          if (!response.error) {
            setShowContent(response);
            console.log(Object.keys(response));
          }
        })
        .catch((err) => console.error(err));
    }
  }, [showView]);

  return (
    <div className="overflow-y-scroll h-[91vh] flex flex-col">
      <div className="py-[15px] mycenter bdr-b ">
        <p className="text-[14px] font-bold text-center">
          Explore Trending Shows
        </p>
      </div>
      {snackbar && <SnackBar message={snackbar.message} type={snackbar.type} />}

      {showView ? (
        <div>
          <div className="flex justify-between p-[10px] pb-0 items-center">
            <p
              onClick={() => setShowView(false)}
              className=" cursor-pointer flex items-center gap-x-[5px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-left w-[15px] h-[15px] transition-all "
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="5" y1="12" x2="11" y2="18" />
                <line x1="5" y1="12" x2="11" y2="6" />
              </svg>{" "}
              Back
            </p>

            <a
              href={`https://www.showwcase.com/show/${showId}/${showContent?.slug}`}
              className="p-[4px] bdr-all rounded-[6px] mycenter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-up-right w-[15px] h-[15px]"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="17" y1="7" x2="7" y2="17" />
                <polyline points="8 7 17 7 17 16" />
              </svg>
            </a>
          </div>

          <div className="top w-full flex justify-between items-center pt-[15px] px-[10px] ">
            <div className="flex items-center gap-[8px]">
              {!imgErr && showContent?.user?.profilePictureUrl ? (
                <img
                  src={showContent?.user?.profilePictureUrl}
                  onError={() => {
                    setImgErr(true);
                  }}
                  alt="User profile"
                  className="w-[40px] h-[40px] rounded-full bg-[#1e3b57]"
                />
              ) : (
                <img
                  src="https://res.cloudinary.com/ddlhk5yje/image/upload/v1683316744/showwcasexs/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black_gboe9d.png"
                  alt="User profile"
                  className="w-[40px] h-[40px] rounded-full"
                />
              )}

              <div>
                <a
                  href={`https://www.showwcase.com/${showContent?.user?.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline text-[14px] !text-white !visited:text-white  ml-0 hover:underline"
                >
                  {showContent?.user?.displayName}
                </a>
                {showContent?.readingStats && (
                  <p className="text-[12px] !text-slate-400 pt-[5px]">{`${showContent?.readingStats?.text}`}</p>
                )}
              </div>
            </div>
            <p className="p-[4px] w-[60px] justify-start flex items-center gap-x-[10px] text-[10px] capitalize">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-user bg-[#23545e] rounded-full p-[3px] w-[18px] h-[18px] "
                width="12"
                height="12"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="#4ca9af"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
              </svg>
              {showContent?.views}
            </p>
          </div>

          <div className="flex flex-col p-[10px] pb-[20px]">
            {showContent?.coverImageUrl && (
              <img
                className="w-full rounded-[6px] mb-[15px] bdr-all"
                src={showContent?.coverImageUrl}
                alt=""
              />
            )}
            <p className="text-[14px] font-bold text-center py-[6px]">
              {showContent?.title}{" "}
            </p>

            {showContent?.projectSummary && (
              <p className="text-[10px] text-center py-[6px]">
                {showContent?.projectSummary}{" "}
              </p>
            )}
            <div className="w-full flex justify-between items-center pt-[15px]">
              {showContent?.category && (
                <div className="py-[10px] px-[12px] rounded-[6px] bg-[#289ddfc9] capitalize text-[#e4e4e4] text-[12px]">
                  {showContent?.category}
                </div>
              )}{" "}
              {showContent?.readingStats?.text && (
                <p className="text-[12px] !text-slate-400">
                  {showContent?.readingStats?.text}
                </p>
              )}
            </div>

            <p className="py-1 bdr-b"></p>

            {showContent?.content[0]?.lexicalBlock?.html && (
              <div id="showContent">
                <div
                  dangerouslySetInnerHTML={{
                    __html: showContent?.content[0]?.lexicalBlock?.html,
                  }}
                ></div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-[91vh]  overflow-y-scroll ">
          <div className="flex flex-col items-center justify-center p-[10px] gap-y-[10px]  ">
            {Object.keys(shows).length !== 0 ? (
              shows.map((show) => {
                return (
                  <ShowCard
                    props={show}
                    showSnackbar={showSnackbar}
                    setShowView={setShowView}
                    setShowID={setShowID}
                  />
                );
              })
            ) : (
              <Loader />
            )}
          </div>

          {Object.keys(shows).length !== 0 ? (
            <div className="pb-[25px] pt-[10px] mycenter">
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
      )}
    </div>
  );
};

export default ShowLayout;
