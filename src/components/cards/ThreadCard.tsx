import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { copyToClipboard } from "../../util";
const ThreadCard = ({ props, showSnackbar }: any) => {
  const [imgErr, setImgErr] = useState(false);
  const { message } = props;

  console.log(props?.linkPreviewMeta);

  function handleClick() {
    copyToClipboard(`https://www.showwcase.com/thread/${props?.id}`);
    showSnackbar("Thread link copied to clipboard!", 3, "clipboard");
  }

  return (
    <div className="bdr-all w-[95%] bg-[#1a1a1b] my-[8px] px-[8px]">
      <div className="top w-full flex justify-between items-center py-[10px] px-[8px] bdr-b">
        <div className="flex items-center gap-[8px]">
          {!imgErr && props?.user?.profilePictureUrl ? (
            <img
              src={props?.user?.profilePictureUrl}
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
              href={`https://www.showwcase.com/${props?.user?.username}`}
              className="text-[14px] text-white m-0 visited:text-white hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {props?.user?.displayName}
            </a>
            <p className="text-[12px] !text-slate-400">{`@${props?.user?.username}`}</p>
          </div>
        </div>
        <a
          href={`https://www.showwcase.com/thread/${props?.id}`}
          className="p-[4px] bdr-all rounded-[6px]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-up-right w-[20px] h-[20px]"
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
      <div className="thread-content">
        {props?.title && <ReactMarkdown children={props?.title} />}

        {message && (
          <ReactMarkdown
            linkTarget="_blank"
            children={message}
            remarkPlugins={[remarkGfm]}
          />
        )}
        {props?.code && (
          <div className="p-[4px] mx-[2px] my-[15px] bdr-all text-slate-400 rounded-[6px] italic">
            <ReactMarkdown children={props?.code} />
          </div>
        )}

        {props?.images && (
          <img
            className="w-full rounded-[6px] my-[15px]"
            src={props?.images[0]}
            alt=""
          />
        )}

        {props?.linkPreviewMeta !== "null" &&
        props?.linkPreviewMeta?.type === "external" ? (
          <div className="p-[5px] mx-[2px] my-[15px] bdr-all  rounded-[6px]  w-full flex flex-col  justify-center items-center">
            {props?.linkPreviewMeta.images && (
              <img
                className="w-full rounded-[6px]"
                src={props?.linkPreviewMeta?.images[0]}
                alt=""
              />
            )}
            <div className="w-full">
              {props?.linkPreviewMeta?.title && (
                <p className="mx-[5px] my-[15px]">
                  {props?.linkPreviewMeta?.title}
                </p>
              )}

              {props?.linkPreviewMeta?.description && (
                <p className="truncate-2 ">
                  {props?.linkPreviewMeta?.description}
                </p>
              )}

              {props?.linkPreviewMeta?.url && (
                <a
                  className="text-blue-500 mx-[5px] mb-[15px] hover:underline"
                  href={props?.linkPreviewMeta?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {props?.linkPreviewMeta?.url}
                </a>
              )}
            </div>
          </div>
        ) : props?.linkPreviewMeta !== "null" &&
          props?.linkPreviewMeta?.type === "project" ? (
          <div className="p-[5px] mx-[2px] my-[15px] bdr-all  rounded-[6px]  w-full flex flex-col  justify-center items-center">
            {props?.linkPreviewMeta?.project?.coverImage && (
              <img
                className="w-full rounded-[6px]"
                src={props?.linkPreviewMeta?.project?.coverImage}
                alt=""
              />
            )}
            <div className="w-full">
              <p className="mx-[5px] my-[15px]">
                {props?.linkPreviewMeta?.project?.title}
              </p>
              <p className="truncate-2 ">
                {props?.linkPreviewMeta?.project?.projectSummary}
              </p>
              <a
                className="text-blue-500 mx-[5px] mb-[15px]"
                href={`https://www.showwcase.com/show/${props?.linkPreviewMeta?.project?.id}/${props?.linkPreviewMeta?.project?.slug}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {` Read ${props?.linkPreviewMeta?.project?.category}`}
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="action-buttons pb-[8px] px-[4px] flex justify-between">
        <div className="flex gap-x-[6px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-heart bg-[#502323] rounded-full p-[2px] w-[16px] h-[16px] "
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
          <p className="text-[12px] font-bold">{props?.totalUpvotes}</p>
        </div>

        <div className="flex gap-x-[6px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-arrow-up-circle bg-[#103721] rounded-full p-[2px] w-[16px] h-[16px] "
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
          <p className="text-[12px] font-bold">{props?.totalBoosts}</p>
        </div>

        <div className="flex gap-x-[6px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-message-circle-2 bg-[#5a4814a8] rounded-full p-[2px] w-[16px] h-[16px] "
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
          <p className="text-[12px] font-bold">{props?.totalReplies}</p>
        </div>

        <div
          className="flex gap-x-[6px] cursor-pointer"
          onClick={() => handleClick()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-user bg-[#1e3b57] rounded-full p-[2px] w-[16px] h-[16px] "
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
            <path d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ThreadCard;
