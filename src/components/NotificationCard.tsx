import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const NotificationCard = ({ props }: any) => {
  const [imgErr, setImgErr] = useState(false);

  const { type, data, initiators } = props;

  const types = [
    "new_thread_upvote",
    "thread_boost",
    "new_reply",
    "new_follower",
  ];
  return (
    <>
      {types.includes(type) && (
        <div className="relative flex items-center justify-center  m-[25px] w-[340px]">
          {/* Heading section */}
          {!imgErr && initiators[0]?.profilePictureUrl ? (
            <img
              src={initiators[0]?.profilePictureUrl}
              onError={() => {
                setImgErr(true);
              }}
              alt="User profile"
              className="w-[40px] h-[40px] rounded-full absolute -left-[15px] -top-[20px] border-2 border-[#4f4f4f] bg-[#4f4f4f]"
            />
          ) : (
            <img
              src="https://res.cloudinary.com/ddlhk5yje/image/upload/v1683316744/showwcasexs/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black_gboe9d.png"
              alt="User profile"
              className="w-[40px] h-[40px] rounded-full absolute -left-[15px] -top-[20px] border-2 border-[#4f4f4f] bg-[#4f4f4f]"
            />
          )}

          <div className="bdr-all p-2 bg-[#1a1a1b]  rounded-md w-full flex flex-col">
            <div className="p-[12px]">
              {type === "new_thread_upvote" ? (
                <p className=" text-[12px] flex items-center flex-wrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-heart bg-[#502323] rounded-full p-[3px] w-[18px] h-[18px] "
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    stroke-width="3"
                    stroke="#eb5757"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                  </svg>
                  <a
                    href={`https://www.showwcase.com/${initiators[0]?.username}`}
                    className="sxs-link text-[12px] mx-[5px] my-[0px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {initiators[0]?.displayName}
                  </a>{" "}
                  upvoted your{" "}
                  <a
                    href={`https://www.showwcase.com/thread/${data?.thread?.id}`}
                    className="sxs-link text-[12px] mx-[5px] my-[0px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Thread
                  </a>
                </p>
              ) : type === "thread_boost" ? (
                <p className="text-[12px] flex items-center flex-wrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-arrow-up-circle bg-[#103721] rounded-full p-[3px] w-[18px] h-[18px] "
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    stroke-width="3"
                    stroke="#25af60"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="9" />
                    <line x1="12" y1="8" x2="8" y2="12" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="16" y1="12" x2="12" y2="8" />
                  </svg>
                  <a
                    href={`https://www.showwcase.com/${initiators[0]?.username}`}
                    className="sxs-link text-[12px] mx-[5px] my-[0px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {initiators[0]?.displayName}
                  </a>{" "}
                  boosted your{" "}
                  <a
                    href={`https://www.showwcase.com/thread/${data?.thread?.id}`}
                    className="sxs-link text-[12px] mx-[5px] my-[0px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Thread
                  </a>
                </p>
              ) : type === "new_reply" ? (
                <p className="text-[12px] flex items-center flex-wrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-message-circle-2 bg-[#5a4814a8] rounded-full p-[3px] w-[18px] h-[18px] "
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    stroke-width="3"
                    stroke="#ffbf00"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                    <line x1="12" y1="12" x2="12" y2="12.01" />
                    <line x1="8" y1="12" x2="8" y2="12.01" />
                    <line x1="16" y1="12" x2="16" y2="12.01" />
                  </svg>
                  <a
                    href={`https://www.showwcase.com/${initiators[0]?.username}`}
                    className="sxs-link text-[12px] mx-[5px] my-[0px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {initiators[0]?.displayName}
                  </a>{" "}
                  replied to your{" "}
                  <a
                    href={`https://www.showwcase.com/thread/${data?.thread?.id}`}
                    className="sxs-link text-[12px] mx-[5px] my-[0px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Thread
                  </a>
                </p>
              ) : type === "new_follower" ? (
                <p className="text-[12px] flex items-center flex-wrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-user bg-[#1e3b57] rounded-full p-[3px] w-[18px] h-[18px] "
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    stroke-width="3"
                    stroke="#4595d0"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="7" r="4" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                  </svg>
                  <a
                    href={`https://www.showwcase.com/${initiators[0]?.username}`}
                    className="sxs-link text-[12px] mx-[5px] my-[0px]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {initiators[0]?.displayName}
                  </a>{" "}
                  followed you
                </p>
              ) : (
                ""
              )}
            </div>

            {/* Content section */}

            {type !== "new_follower" && (
              <div className="bdr-t px-[15px]">
                {type === "new_reply" && data?.reply?.message && (
                  <p className="pb-[7px] pt-[12px] text-[12px]">
                    {data?.reply?.message}
                  </p>
                )}
                {type === "new_reply" && data?.reply?.title && (
                  <p className="pb-[7px] pt-[12px] text-[12px]">
                    {data?.reply?.title}
                  </p>
                )}
                {type === "new_reply" && data?.reply?.images && (
                  <img
                    src={data?.reply?.images[0]}
                    className=" pb-[7px] pt-[12px] w-full rounded-md"
                    alt=""
                  ></img>
                )}
                {type === "new_reply" && data?.reply?.gif && (
                  <img
                    src={data?.reply?.gif?.big?.url}
                    className=" pb-[7px] pt-[12px] w-full "
                    alt=""
                  ></img>
                )}
                <div
                  className={`${
                    type === "new_reply"
                      ? "bdr-all bdr-all p-[10px] rounded-md"
                      : ""
                  }`}
                >
                  {data?.thread?.title && (
                    <p className=" pb-[7px] pt-[12px] text-[12px]">
                      {data?.thread?.title}
                    </p>
                  )}{" "}
                  {data?.thread?.message && (
                    <div className=" pt-[7px] pt-[12px] mb-[5px] text-[12px] truncate-1">
                      <ReactMarkdown
                        children={data?.thread?.message}
                        remarkPlugins={[remarkGfm]}
                      />
                    </div>
                  )}
                  {data?.thread?.gif && (
                    <img
                      src={data?.thread?.gif?.big?.url}
                      className=" pb-[7px] pt-[12px] w-full"
                      alt=""
                    ></img>
                  )}
                  {data.thread?.image?.length && (
                    <img
                      src={data?.thread?.image[0]}
                      className=" pb-[7px] pt-[12px] w-full"
                      alt=""
                    ></img>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NotificationCard;
