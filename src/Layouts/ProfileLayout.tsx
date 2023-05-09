import { useContext, useEffect, useState } from "react";
import { LogOutContext, SetLogOutContext } from "./Layout";

const ProfileLayout = () => {
  const [inputKey, setInputKey]: any = useState("");
  const [fetchMode, setFetchMode] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [userDetails, setUserDetails]: any = useState({});
  const logout: any = useContext(LogOutContext);
  const setLogOut: any = useContext(SetLogOutContext);
  useEffect(() => {
    if (localStorage.getItem("key") !== "") {
      setFetchMode(true);
    } else {
      setLogOut(true);
      setFetchMode(false);
    }

    console.log("onload", logout);
  }, []);

  useEffect(() => {
    if (logout) {
      setFetchMode(false);
    }
  }, [logout]);

  useEffect(() => {
    console.log(localStorage.getItem("key"));
    if (fetchMode) {
      fetch("https://cache.showwcase.com/auth", {
        method: "GET",
        headers: {
          "x-api-key": `${localStorage.getItem("key")}`,
        },
      })
        .then((response) => response.json())
        .then((response) => {
          if (!response.error) {
            setLogOut(false);
            setUserDetails(response);
          }
          setErrMsg(response.error);
        })
        .catch((err) => console.error(err));
    }
  }, [fetchMode]);
  return (
    <div className="w-full h-[90vh] overflow-y-scroll">
      {logout && (
        <div className="w-full h-[100%] flex flex-col items-center justify-center gap-4">
          <img
            src="https://res.cloudinary.com/ddlhk5yje/image/upload/v1683317102/showwcasexs/showwcaseXS_efwweq.png"
            alt=""
          />
          <h3 className="text-center">
            Welcome to showwcaseXS! Enter your API key to login.
          </h3>
          <small className="text-center">
            Click{" "}
            <a
              className="sxs-link"
              href="https://www.showwcase.com/settings/api-keys"
            >
              here
            </a>{" "}
            to get API keys
          </small>
          <input
            type="text"
            value={inputKey}
            onChange={(e) => setInputKey(e.target.value)}
            className=" w-[80%] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus-within:ring-blue-500 dark:target:ring-blue-500 dark:active:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your API key"
          />

          {errMsg && <small className="text-red-500">{errMsg}</small>}
          <div className="flex gap-5">
            <button
              className="bdr-all bg-[#4595d0] py-[8px] px-[12px] rounded-md"
              onClick={() => {
                setInputKey("");
                setFetchMode(false);
              }}
            >
              Clear
            </button>
            <button
              className={`bdr-all ${
                inputKey ? "bg-[#4595d0] " : "bg-gray-700"
              } py-[8px] px-[12px] rounded-md`}
              onClick={() => {
                localStorage.setItem("key", inputKey);
                setFetchMode(true);
              }}
              disabled={!inputKey ? true : false}
            >
              Enter
            </button>
          </div>
        </div>
      )}

      {!logout &&
        (Object.keys(userDetails).length ? (
          <>
            <div className="flex flex-col justify-center items-center p-[40px] gap-[15px]">
              <img
                className="w-[80px] h-[80px]"
                src={userDetails?.profilePictureUrl}
                alt=""
              />
              {/* Basic details */}
              <div className="w-full flex justify-between items-center">
                <p>@{userDetails.username}</p>
                <p>{userDetails.location}</p>
                <a href={`https://www.showwcase.com/${userDetails.username}`}>
                  View full profile
                </a>
              </div>

              {/* Headline */}
              <p className="text-center text-[#4595d0] ">
                {userDetails.headline}
              </p>
              {/* Stat box */}
              <div className="w-full py-[20px] px-[40px] bdr-all bg-[#1a1a1b] flex flex-col items-center rounded-md">
                <div className="w-full flex justify-between py-[10px]">
                  <p>{userDetails.totalFollowers} Followers</p>
                  <p>{userDetails.totalFollowing} Following</p>
                </div>
                <div className="w-full flex justify-between py-[10px]">
                  <p>{userDetails.totalProjects} Shows</p>
                  <p>{userDetails.totalThreads} Threads</p>
                </div>
              </div>
              {/* Experties */}
              <div className="flex flex-col w-full">
                <p className="text-[#999] text-[20px] font-bold">Expertise</p>
                <div className="w-full flex flex-wrap gap-y-[15px] py-[15px]">
                  {userDetails?.tags &&
                    userDetails?.tags.map((tag: any) => {
                      return <p className="w-[50%]">{tag.name}</p>;
                    })}
                </div>
              </div>
              <div className="w-full flex justify-between">
                <a
                  className="font-bold text-white no-underline visited:text-white"
                  href={userDetails.resumeUrl}
                >
                  <button className="bdr-all bg-[#4595d0] py-[8px] px-[12px] rounded-md">
                    View Resume
                  </button>
                </a>

                <a
                  className="font-bold text-white no-underline visited:text-white"
                  href="www.showwcase.com"
                >
                  <button className="bdr-all bg-[#4595d0] py-[8px] px-[12px] rounded-md">
                    Invite
                  </button>
                </a>
              </div>
            </div>
          </>
        ) : (
          <div className=" h-[100%] flex justify-center items-center p-[40px]">
            <div
              className="w-12 h-12 rounded-full animate-spin
          border-y border-solid border-white border-t-transparent shadow-md"
            ></div>
          </div>
        ))}
    </div>
  );
};

export default ProfileLayout;
