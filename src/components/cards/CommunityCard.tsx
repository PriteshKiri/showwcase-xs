import { useState } from "react";

const CommunityCard = ({ props }: any) => {
  const [imgErr, setImgErr] = useState(false);
  return (
    <div className="w-[45%] bdr-all rounded-[6px] p-4 flex flex-col justify-start items-center">
      {!imgErr && props?.pictureUrl ? (
        <img
          src={props?.pictureUrl}
          onError={() => {
            setImgErr(true);
          }}
          alt="User profile"
          className="w-[40px] h-[40px] rounded-[6px] my-[8px] bg-[#4f4f4f] border border-[2px] border-[#4f4f4f]"
        />
      ) : (
        <img
          src="https://res.cloudinary.com/ddlhk5yje/image/upload/v1683316744/showwcasexs/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black_gboe9d.png"
          alt="User profile"
          className="w-[40px] h-[40px] rounded-[6px] my-[8px] bg-[#4f4f4f] border border-[2px] border-[#4f4f4f]"
        />
      )}

      <div className="flex pt-[10px]">
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
          <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
        </svg>

        <p className="pb-[8px] ml-[10px] text-[12px] font-bold">
          {props?.totalMembers}
        </p>
      </div>

      <p className="text-[12px] text-center w-full pb-[10px] justify-center">
        {props?.name}
      </p>

      <a
        href={`https://www.showwcase.com/community/${props?.slug}`}
        target="_blank"
        rel="noopener noreferrer"
        className="m-[0px]"
      >
        <button className="bdr-all no-underline bg-[#4595d0] m-[0px] py-[8px] px-[12px] rounded-[6px] text-[12px] py-[8px] text-white visited:text-white hover:bg-[#366588] cursor-pointer">
          Explore
        </button>
      </a>
    </div>
  );
};

export default CommunityCard;
