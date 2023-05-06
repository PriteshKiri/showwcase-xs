const ThreadCard = ({ props }: any) => {
  console.log(props);
  return (
    <div className="bdr-all w-[95%] bg-[#1a1a1b] my-2 px-2">
      <div className="top w-full flex justify-between items-center py-4 bdr-b">
        <div className="flex items-center gap-1">
          <img
            src={props.user.profilePictureKey}
            alt="User profile"
            className="w-[40px] h-[40px] rounded-full"
          />
          <div>
            <p className="text-sm">{props.user.displayName}</p>
            <p className="text-xs text-slate-400">{`@${props.user.username}`}</p>
          </div>
        </div>
        <a href="s" className="p-[4px] bdr-all rounded-md">
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
      <div className="content">
        <p>{props.message}</p>
      </div>
    </div>
  );
};

export default ThreadCard;
