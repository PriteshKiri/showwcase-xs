import { useEffect, useState } from "react";
import { useSnackbar } from "../util";
import SnackBar from "./SnackBar";
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

const WriteThread = () => {
  const [title, setTitle] = useState<string>("");
  const [thread, setThread] = useState<string>("");
  const [post, setPost] = useState<boolean>(false);
  const { snackbar, showSnackbar }: any = useSnackbar();

  useEffect(() => {
    if (post) {
      fetch("https://cache.showwcase.com/threads", {
        method: "POST",
        headers: {
          "x-api-key": `${localStorage.getItem("key")}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          title: title,
          message: thread,
        }),
      })
        .then((response: any) => {
          if (response.ok) {
            showSnackbar("Thread posted successfully!", 3);
            setTitle("");
            setThread("");
            setPost(false);
          }
          return response.json();
        })

        .then((json) => {
          if (json.error) {
            showSnackbar(`Failed to post thread: ${json.error}`, 4);
            setPost(false);
          }
          console.log(json, "json");
        })
        .catch((error) =>
          console.error("Error occurred while posting thread:", error)
        );
    }
  }, [post]);

  return (
    <div className="p-[15px]  brd-all h-[80vh] overflow-y-scroll ">
      {snackbar && (
        <SnackBar message={snackbar.message} time={snackbar.duration} />
      )}

      <div className="p-[15px] bdr-all rounded-md">
        <input
          type="text"
          className="shadow-sm mb-[15px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 shadow-sm-light"
          placeholder="Write Title for your thread"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          value={thread}
          rows={15}
          required
          className=" block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 ring-blue-500 border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write thread..."
          onChange={(e) => setThread(e.target.value)}
        ></textarea>
      </div>
      <div className="flex justify-center py-[15px]">
        <button
          className={` ${
            title.trim() || thread.trim() ? "bg-[#4595d0]" : "bg-gray-700"
          }
          py-[8px] px-[20px] rounded-md`}
          onClick={() => {
            console.log(title, thread);
            setPost(true);
          }}
          disabled={title.trim() || thread.trim() ? false : true}
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default WriteThread;
