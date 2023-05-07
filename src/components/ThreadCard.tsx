import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
const ThreadCard = ({ props }: any) => {
  const [imgErr, setImgErr] = useState(false);
  const { message } = props;

  console.log(props.title, props.message, props.user);
  return (
    <div className="bdr-all w-[95%] bg-[#1a1a1b] my-2 px-2">
      <div className="top w-full flex justify-between items-center pt-2 px-2 bdr-b">
        <div className="flex items-center gap-2">
          {!imgErr && props.user.profilePictureKey ? (
            <img
              src={props.user.profilePictureKey}
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
            <p className="text-sm">{props.user.displayName}</p>
            <p className="text-xs text-slate-400">{`@${props.user.username}`}</p>
          </div>
        </div>
        <a
          href={`https://www.showwcase.com/thread/${props.id}`}
          className="p-[4px] bdr-all rounded-md"
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
        {props.title && <ReactMarkdown children={props.title} />}

        {message && (
          <ReactMarkdown children={message} remarkPlugins={[remarkGfm]} />
        )}
        {props.code && (
          <div className="p-[4px] mx-[2px] my-[15px] bdr-all text-slate-400 rounded-md italic">
            <ReactMarkdown children={props.code} />
          </div>
        )}

        {props.images && (
          <img
            className="w-full rounded-md my-[15px]"
            src={props.images[0]}
            alt=""
          />
        )}

        {props.linkPreviewMeta !== "null" &&
        props.linkPreviewMeta.type === "external" ? (
          <div className="p-[5px] mx-[2px] my-[15px] bdr-all  rounded-md  w-full flex flex-col  justify-center items-center">
            {props.linkPreviewMeta.images && (
              <img
                className="w-full rounded-md"
                src={props.linkPreviewMeta.images[0]}
                alt=""
              />
            )}
            <div className="w-full">
              <h4 className="mx-[5px] my-[15px]">
                {props.linkPreviewMeta.title}
              </h4>
              <p className="truncate-2 ">{props.linkPreviewMeta.description}</p>
              <a
                className="text-blue-500 mx-[5px] mb-[15px]"
                href={props.linkPreviewMeta.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.linkPreviewMeta.url}
              </a>
            </div>
          </div>
        ) : props.linkPreviewMeta !== "null" &&
          props.linkPreviewMeta.type === "project" ? (
          <div className="p-[5px] mx-[2px] my-[15px] bdr-all  rounded-md  w-full flex flex-col  justify-center items-center">
            {props.linkPreviewMeta.project.coverImage && (
              <img
                className="w-full rounded-md"
                src={props.linkPreviewMeta.project.coverImage}
                alt=""
              />
            )}
            <div className="w-full">
              <h4 className="mx-[5px] my-[15px]">
                {props.linkPreviewMeta.project.title}
              </h4>
              <p className="truncate-2 ">
                {props.linkPreviewMeta.project.projectSummary}
              </p>
              <a
                className="text-blue-500 mx-[5px] mb-[15px]"
                href={`https://www.showwcase.com/show/${props.linkPreviewMeta.project.id}/${props.linkPreviewMeta.project.slug}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {` Read ${props.linkPreviewMeta.project.category}`}
              </a>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ThreadCard;
