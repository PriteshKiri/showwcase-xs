import React, { useState } from "react";
import { copyToClipboard } from "../util";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

const ShowCard = ({ props, showSnackbar }: any) => {
  const [imgErr, setImgErr] = useState(false);

  function handleClick() {
    copyToClipboard(
      `https://www.showwcase.com/show/${props?.id}/${props?.slug}`
    );
    showSnackbar("Link copied to your clipboard", 3);
  }
  return (
    <div className="bdr-all w-[95%] bg-[#1a1a1b] flex flex-col my-2 px-2">
      <div className="top w-full flex justify-between items-center pt-[15px] px-[10px] ">
        <div className="flex items-center gap-2">
          {!imgErr && props?.user?.profilePictureKey ? (
            <img
              src={props?.user?.profilePictureKey}
              onError={() => {
                setImgErr(true);
              }}
              alt="User profile"
              className="w-[40px] h-[40px] rounded-full"
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
              href={`https://www.showwcase.com/${props?.user?.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-white visited:text-white ml-0"
            >
              {props?.user?.displayName}
            </a>
            {props?.readingStats && (
              <p className="text-[12px] text-slate-400">{`${props?.readingStats?.text}`}</p>
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
          {props?.totalViews}
        </p>
      </div>
      <div className="show-content p-[10px]">
        <h4 className="text-left text-[12px] bold py-[10px]">{props?.title}</h4>
        {props?.projectSummary ? (
          <p className="text-left text-[10px] p-[10px] mb-[15px] bdr-all rounded-md">
            <ReactMarkdown
              children={props?.projectSummary}
              remarkPlugins={[remarkGfm]}
            />
          </p>
        ) : props?.seo?.description ? (
          <p className="text-left text-[10px] p-[10px] mb-[15px] bdr-all rounded-md">
            <ReactMarkdown
              children={props?.seo?.description}
              remarkPlugins={[remarkGfm]}
            />
          </p>
        ) : (
          ""
        )}

        <div className="flex justify-start items-center  my-[5px]">
          <a
            href={`https://www.showwcase.com/show/${props?.id}/${props?.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="m-[0px]"
          >
            <button className=" no-underline bg-[#4595d0] m-[0px] py-[8px] px-[12px] rounded-md text-[12px] py-2 text-white visited:text-white hover:bg-[#366588]">
              Read now
            </button>
          </a>

          <button
            className=" m-[0px] ml-[10px] no-underline bg-[#4595d0] m-[0px] py-[8px] px-[12px] rounded-md text-[12px] py-2 text-white visited:text-white hover:bg-[#366588]"
            onClick={handleClick}
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
