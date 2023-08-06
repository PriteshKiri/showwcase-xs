import { useContext, useEffect, useState } from "react";
import { LogOutContext, SetLogOutContext } from "./Layout";
import Loader from "../components/util/Loader";
import { copyToClipboard, useSnackbar } from "../util";
import SnackBar from "../components/util/SnackBar";

const ProfileLayout = () => {
  const [inputKey, setInputKey]: any = useState("");
  const [fetchMode, setFetchMode] = useState(false);
  const [userDetails, setUserDetails]: any = useState({});
  const logout: any = useContext(LogOutContext);
  const setLogOut: any = useContext(SetLogOutContext);
  const { snackbar, showSnackbar }: any = useSnackbar();

  useEffect(() => {
    if (
      localStorage.getItem("sxs_key") !== "" ||
      localStorage.getItem("sxs_key") !== null ||
      localStorage.getItem("sxs_key") !== undefined
    ) {
      setFetchMode(true);

      // console.log("fetch mode on");
    } else {
      setLogOut(true);
      setFetchMode(false);
    }
    // console.log("onload", logout, "sxs_key", localStorage.getItem("sxs_key"));
  }, []);

  useEffect(() => {
    if (
      localStorage.getItem("sxs_key") === "" ||
      localStorage.getItem("sxs_key") === null ||
      localStorage.getItem("sxs_key") === undefined
    ) {
      // console.log("This should not");

      setFetchMode(false);
    }
  }, [logout]);

  useEffect(() => {
    // console.log("I am in usee effect and fecth mnode is:", fetchMode);
    // console.log(localStorage.getItem("sxs_key"));
    if (fetchMode) {
      // console.log("in feetch");
      fetch("https://cache.showwcase.com/auth", {
        method: "GET",
        headers: {
          "x-api-key": `${localStorage.getItem("sxs_key")}`,
        },
      })
        .then((response) => response.json())
        .then((response) => {
          if (!response.error) {
            if (logout) {
              showSnackbar("Login successful!", 3, "login");
            }
            setLogOut(false);
            setUserDetails(response);
          } else {
            showSnackbar(`Error: ${response?.error}`, 3, "error");
            setFetchMode(false);
            setTimeout(() => {
              localStorage.setItem("sxs_key", "");
            }, 0);
          }
        })
        .catch((err) => console.error(err));
    }
  }, [fetchMode]);
  return (
    <div className="overflow-y-scroll h-[90vh] flex flex-col">
      {snackbar && <SnackBar message={snackbar.message} type={snackbar.type} />}
      {!logout && Object.keys(userDetails).length !== 0 && (
        <div className="py-[15px] mycenter bdr-b ">
          <p className="text-center font-bold text-[14px] text-white">
            {userDetails?.displayName}
          </p>
        </div>
      )}
      <div
        className="w-full h-[90vh] overflow-y-scroll"
        onLoad={() => {
          localStorage.setItem("username", userDetails?.username);
        }}
      >
        {logout && (
          <div className="w-full h-[100%] flex flex-col items-center justify-start gap-[16px] text-white">
            <div className="mycenter sxs-border-gradient mt-[100px]">
              <img
                src="https://res.cloudinary.com/ddlhk5yje/image/upload/v1684524896/showwcasexs/SXS_-_500x500_r2isz7.png"
                className="w-[120px] p-[15px] h-[120px] rounded-[50%]"
                alt=""
              />
            </div>

            <p className="!bg-clip-text !text-transparent !bg-gradient-to-r from-cyan-600 to-blue-400 text-center text-[18px] font-bold">
              ShowwcaseXS
            </p>
            <p className="text-center text-[14px] mt-[25px]">
              Please enter your API key to login.
            </p>

            <small className="text-center text-[11px]">
              Click{" "}
              <a
                className="sxs-link hover:underline"
                href="https://www.showwcase.com/settings/api-keys"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>{" "}
              to get API keys
            </small>

            {localStorage.getItem("sxs_key") !== "" &&
            localStorage.getItem("sxs_key") !== null &&
            Object.keys(userDetails)?.length === 0 ? (
              <p className="text-center text-[12px] mt-[20px]">
                {" "}
                Checking your credentials...
              </p>
            ) : (
              <>
                <input
                  value={inputKey}
                  onChange={(e) => setInputKey(e.target.value)}
                  className=" w-[80%] !bg-gray-700 !text-white !outline-0  border border-gray-300 text-gray-900 text-sm rounded-[8px] focus:!ring-blue-500 focus:!border-blue-500 block  p-[10px] border-gray-600 !placeholder:gray-400 !placeholder:[14px] mt-[25px]"
                  placeholder="Enter your API key"
                />

                <div className="flex gap-[20px]">
                  <button
                    className="text-[14px] bdr-all bg-[#4595d0] py-[8px] px-[12px] rounded-[6px] hover:bg-[#366588] cursor-pointer"
                    onClick={() => {
                      setInputKey("");
                      setFetchMode(false);
                    }}
                  >
                    Clear
                  </button>
                  <button
                    className={`text-[14px] bdr-all cursor-pointer ${
                      inputKey.trim()
                        ? "bg-[#4595d0] hover:bg-[#366588] "
                        : "bg-gray-700"
                    } py-[8px] px-[12px] rounded-[6px]`}
                    onClick={() => {
                      localStorage.setItem("sxs_key", inputKey);
                      setFetchMode(true);
                    }}
                    disabled={inputKey.trim() ? false : true}
                  >
                    Enter
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {!logout &&
          (Object.keys(userDetails)?.length !== 0 ? (
            <>
              <div className="flex flex-col justify-center items-center px-[40px] pt-[40px] pb-[20px] gap-[15px]">
                <img
                  className="w-[120px] h-[120px] bg-[#313131] rounded-[50%]"
                  src={userDetails?.profilePictureUrl}
                  alt="User profile"
                />
                {/* Basic details */}
                <div className="w-full flex justify-between items-center mt-[15px]">
                  <p className="text-[14px]">@{userDetails?.username || "-"}</p>
                  <p className="text-[14px]">{userDetails?.location || "-"}</p>
                  <a
                    href={`https://www.showwcase.com/${userDetails.username}`}
                    className="sxs-link text-[14px] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Full profile
                  </a>
                </div>

                {/* Headline */}
                <p className="text-center !text-[#4595d0] text-[14px] py-[12px]">
                  {userDetails?.headline || "-"}
                </p>
                {/* Stat box */}
                <div className="w-[75%] py-[10px] px-[40px] bdr-all bg-[#1a1a1b] flex flex-col items-center rounded-[6px] mt-[15px]">
                  <div className="w-full flex justify-between py-[10px]">
                    <p className="text-[12px]">
                      <span className="font-bold text-[14px]">
                        {userDetails?.totalFollowers || "-"}
                      </span>{" "}
                      Followers
                    </p>
                    <p className="text-[12px] ">
                      {" "}
                      <span className="font-bold text-[14px]">
                        {userDetails?.totalFollowing || "-"}{" "}
                      </span>{" "}
                      Following
                    </p>
                  </div>
                  <div className="w-full flex justify-between py-[10px]">
                    <p className="text-[12px]">
                      <span className="font-bold text-[14px]">
                        {userDetails?.totalProjects || "-"}
                      </span>{" "}
                      Shows
                    </p>
                    <p className="text-[12px] ">
                      {" "}
                      <span className="font-bold text-[14px]">
                        {userDetails?.totalThreads || "-"}{" "}
                      </span>{" "}
                      Threads
                    </p>
                  </div>
                </div>
                {/* Experties */}
                {userDetails?.tags && (
                  <div className="flex flex-col w-full mt-[20px]">
                    <p className="!text-[#999] text-[16px] font-bold text-left pb-[10px] bdr-b m-0">
                      Expertise
                    </p>
                    <div className="w-full flex flex-wrap gap-y-[15px] py-[15px]">
                      {userDetails?.tags.map((tag: { name: string }) => {
                        return (
                          <p className="w-[50%] text-[12px]">{tag?.name}</p>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="w-full flex justify-between ">
                  <a
                    className="font-bold text-white no-underline hover:text-white visited:text-white w-[45%] mx-0"
                    href={userDetails.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bdr-all bg-[#4595d0] py-[8px] px-[12px] rounded-[6px] text-white font-bold w-full text-[12px] hover:bg-[#366588]">
                      View Resume
                    </button>
                  </a>

                  <div className="font-bold text-white no-underline hover-text-white visited:text-white w-[45%] mx-0">
                    <button
                      className="bdr-all bg-[#4595d0] py-[8px] px-[12px] rounded-[6px] text-white font-bold w-full text-[12px] hover:bg-[#366588]"
                      onClick={() => {
                        copyToClipboard(
                          `https://www.showwcase.com/${userDetails.username}`
                        );
                        showSnackbar(
                          "Profile link copied to clipboard!",
                          3,
                          "clipboard"
                        );
                      }}
                    >
                      Share profile
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <Loader />
          ))}
      </div>
    </div>
  );
};

export default ProfileLayout;
