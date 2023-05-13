import { copyToClipboard } from "../util";

const RoadmapCard = ({ props, showSnackbar }: any) => {
  function handleClick() {
    copyToClipboard(
      `https://www.showwcase.com/roadmap/${props?.id}/${props?.slug}`
    );
    showSnackbar("Link copined to your clipboard", 3);
  }
  return (
    <div
      className={`flex flex-col p-[15px]  bdr-all`}
      style={{
        background: `linear-gradient(90deg, rgba(0,0,0,1) 0%, ${props?.color} 100%)`,
      }}
    >
      <h2 className="text-[20px] font-bold pb-[16px]">{props?.title}</h2>
      <p className="text-[12px] pb-[16px]">{props?.description}</p>
      <div className="flex justify-start items-center ">
        <a
          href={`https://www.showwcase.com/roadmap/${props?.id}/${props?.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="m-[0px]"
        >
          <button className=" no-underline bg-[#4595d0] m-[0px] py-[8px] px-[12px] rounded-md text-[12px] py-2 text-white visited:text-white">
            Enroll now
          </button>
        </a>

        <button
          className=" m-[0px] ml-[10px] no-underline bg-[#4595d0] m-[0px] py-[8px] px-[12px] rounded-md text-[12px] py-2 text-white visited:text-white"
          onClick={handleClick}
        >
          Share
        </button>
      </div>
    </div>
  );
};

export default RoadmapCard;
