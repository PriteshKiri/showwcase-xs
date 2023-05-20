import { useState } from "react";
import { copyToClipboard } from "../../util";

const SeriesCard = ({ props, showSnackbar }: any) => {
  const [imgErr, setImgErr] = useState(false);

  const { projects } = props;
  const showProjects = projects.slice(0, 4);
  function handleClick() {
    copyToClipboard(
      `https://www.showwcase.com/series/${props?.id}/${props?.slug}`
    );
    showSnackbar("Series link copied to clipboard!", 3, "clipboard");
  }
  return (
    <div className="bdr-all w-[95%] bg-[#1a1a1b] flex flex-col my-[8px] px-[8px]">
      <div className="top w-full flex justify-between items-center pt-[15px] px-[10px] ">
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
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] !text-white !visited:text-white ml-0 hover:underline"
            >
              {props?.user?.displayName}
            </a>
            <p className="text-[12px] !text-slate-400">{`${props?.projects?.length} Shows`}</p>
          </div>
        </div>
        <p className="p-[4px] flex items-center gap-x-[10px] text-[12px] capitalize">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-message-circle-2 bg-[#5a4814a8] rounded-full p-[3px] w-[18px] h-[18px] "
            width="12"
            height="12"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffbf00"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
            <path d="M9 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
            <path d="M15 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
            <path d="M4 20l14 0" />
          </svg>
          {props?.difficulty}
        </p>
      </div>
      <div className="series-content p-[10px]">
        <p className="text-center !text-[#d09d13] uppercase tracking-[4px] text-[14px] py-[15px]">
          {props?.title}
        </p>

        {showProjects.map((project: any): any => {
          return (
            <div className="p-[5px] pl-[10px]  bdr-l bdr-b rounded-bl-[6px]">
              <a
                href={`https://www.showwcase.com/show/${project?.id}/${project?.slug}`}
                className="text-[12px] !text-white !visited:text-white ml-0 hover:underline"
              >
                {project?.title}
              </a>
              <p className="text-[10px] !text-slate-400 ">
                {project?.readingStats?.text}
              </p>
            </div>
          );
        })}

        <div className="flex justify-start items-center mt-[15px] mb-[5px]">
          <a
            href={`https://www.showwcase.com/series/${props?.id}/${props?.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="m-[0px]"
          >
            <button className=" no-underline bg-[#4595d0] m-[0px] py-[8px] px-[12px] rounded-[6px] text-[12px] py-[8px] text-white visited:text-white hover:bg-[#366588]">
              Enroll now
            </button>
          </a>

          <button
            className=" m-[0px] ml-[10px] no-underline bg-[#4595d0] m-[0px] py-[8px] px-[12px] rounded-[6px] text-[12px] py-[8px] text-white visited:text-white hover:bg-[#366588]"
            onClick={handleClick}
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeriesCard;
