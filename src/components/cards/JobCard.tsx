import { useState } from "react";
import { copyToClipboard } from "../../util";

const JobCard = ({ props, showSnackbar, setShowView, setShowID }: any) => {
  const [imgErr, setImgErr] = useState(false);

  function handleClick() {
    copyToClipboard(
      `https://www.showwcase.com/job/${props?.id}-${props?.slug}`
    );
    showSnackbar("Job link copied to clipboard!", 3, "clipboard");
  }

  return (
    <div className="bdr-b w-[95%]  flex flex-col my-2 px-2">
      <div className="top w-full flex justify-between items-start pt-[15px] px-[5px] ">
        <div className="flex items-center gap-[8px] w-[75%]">
          {!imgErr && props?.company?.logoUrl ? (
            <img
              src={props?.company?.logoUrl}
              onError={() => {
                setImgErr(true);
              }}
              alt="User profile"
              className="w-[40px] h-[40px] rounded-full bg-[#1e3b57]"
            />
          ) : (
            <img
              src="https://res.cloudinary.com/ddlhk5yje/image/upload/v1686847289/building_mbmjie.png"
              alt="User profile"
              className="w-[40px] h-[40px] rounded-full"
            />
          )}

          <div>
            <a
              href={`https://www.showwcase.com/job/${props?.id}-${props?.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] !text-white !visited:text-white  ml-0 hover:underline W-[80%]"
            >
              {props?.title}
            </a>
            {props?.company?.name && (
              <p className="text-[12px] !text-slate-400">{`${props?.company?.name}`}</p>
            )}
          </div>
        </div>
        <p className="p-[4px] w-[90px] justify-start flex items-center gap-x-[10px] text-[10px] capitalize">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-message-circle-2 bg-[#5a4814a8] rounded-full p-[3px] w-[18px] h-[18px] "
            width="12"
            height="12"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21l18 0" />
            <path d="M5 21v-14l8 -4v18" />
            <path d="M19 21v-10l-6 -4" />
            <path d="M9 9l0 .01" />
            <path d="M9 12l0 .01" />
            <path d="M9 15l0 .01" />
            <path d="M9 18l0 .01" />
          </svg>
          {props?.type}{" "}
        </p>
      </div>
      <div className="show-content p-[10px]">
        <div className="flex justify-start items-center py-[12px]">
          {props?.arrangement && (
            <p className="p-[4px] w-[35%] justify-start flex items-center gap-x-[10px] text-[10px] capitalize">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-message-circle-2 bg-[#1e3b57] rounded-full p-[3px] w-[18px] h-[18px] "
                width="12"
                height="12"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#4595d0"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg>
              {props?.arrangement}
            </p>
          )}

          {props?.salary?.range && (
            <p className="p-[4px] w-[35%] justify-start flex items-center gap-x-[10px] text-[10px] capitalize">
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
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 1 0 0 4h2a2 2 0 1 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
                <path d="M12 7v10" />
              </svg>
              {props?.salary?.range}
            </p>
          )}
        </div>

        <div className="flex justify-start items-center  my-[5px]">
          <div className="m-[0px]">
            <a
              href={`https://www.showwcase.com/job/${props?.id}-${props?.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className=" no-underline bg-[#4595d0] m-[0px] py-[10px] px-[12px] rounded-[6px] text-[12px] text-white visited:text-white hover:bg-[#366588] hover:no-underline"
            >
              Apply now
            </a>
          </div>

          <button
            className=" m-[0px] ml-[10px] no-underline bg-[#4595d0] m-[0px] py-[8px] px-[12px] rounded-[6px] text-[12px] text-white visited:text-white hover:bg-[#366588]"
            onClick={handleClick}
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
