import { useEffect, useRef, useState } from "react";
import { useSnackbar } from "../util";
import SnackBar from "./util/SnackBar";
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

const WriteThread = () => {
  const inputRef: any = useRef(null);
  const [title, setTitle] = useState<string>("");
  const [thread, setThread] = useState<string>("");
  const [post, setPost] = useState<boolean>(false);
  const recognitionRef = useRef<any | null>(null);
  const [isVoiceTypingEnabled, setIsVoiceTypingEnabled] = useState(false);
  const [ongoingTranscript, setOngoingTranscript] = useState("");
  const { snackbar, showSnackbar }: any = useSnackbar();

  //

  useEffect(() => {
    if (!recognitionRef.current) {
      recognitionRef.current = new (window.SpeechRecognition ||
        (window as any).webkitSpeechRecognition)();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = "en-US";
    }

    const recognition = recognitionRef.current;

    recognition.onresult = (event: any) => {
      const interimTranscript = Array.from(event.results)
        .map((result: any) => result[0])
        .map((result) => result.transcript)
        .join("");

      setOngoingTranscript(interimTranscript);
    };

    recognition.onend = () => {
      setOngoingTranscript("");
    };

    return () => {
      recognition.onresult = null;
      recognition.onend = null;
    };
  }, []);

  const handleToggleVoiceTyping = () => {
    const recognition = recognitionRef.current;

    if (isVoiceTypingEnabled) {
      recognition?.stop();
      setThread((prevTranscript) => prevTranscript + ongoingTranscript);
      setOngoingTranscript("");
    } else {
      recognition?.start();
    }

    setIsVoiceTypingEnabled(!isVoiceTypingEnabled);
  };

  //

  useEffect(() => {
    if (post) {
      fetch("https://cache.showwcase.com/threads", {
        method: "POST",
        headers: {
          "x-api-key": `${localStorage.getItem("sxs_key")}`,
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          title: title,
          message: inputRef?.current?.value,
        }),
      })
        .then((response: any) => {
          if (response.ok) {
            showSnackbar("Thread posted successfully!", 3, "success");
            inputRef.current.value = "";
            setTitle("");
            setThread("");
            setOngoingTranscript("");
            setPost(false);
          }
          return response.json();
        })

        .then((json) => {
          if (json.error) {
            showSnackbar(`Failed to post thread: ${json.error}`, 3, "error");
            setPost(false);
          }
        })
        .catch((error) =>
          console.error("Error occurred while posting thread:", error)
        );
    }
  }, [post]);

  return (
    <div className="p-[15px]  brd-all h-[84vh] overflow-y-scroll ">
      {snackbar && (
        <SnackBar
          message={snackbar.message}
          time={snackbar.duration}
          type={snackbar.type}
        />
      )}

      <div className="p-[15px] bdr-all rounded-[6px]">
        <input
          className="shadow-sm mb-[15px] !border-[1px] !outline-0 !border-gray-500 !text-gray-900 rounded-[8px] block w-full p-2.5 !bg-gray-700 !placeholder:gray-400 !text-white !text-[14px] focus:!ring-blue-500 focus:!border-blue-500"
          placeholder="Write title for your thread (optional)"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <textarea
          value={isVoiceTypingEnabled ? thread + ongoingTranscript : thread}
          rows={15}
          ref={inputRef}
          required
          className=" block !p-[10px] !min-h-[300px] w-full !outline-0  !bg-gray-700 !rounded-[8px] !border-[1px] !border-gray-500  !placeholder:gray-400 !text-white !text-[14px] focus:!ring-blue-500 focus:!border-blue-500"
          placeholder="Write thread..."
          onChange={(e) => {
            setIsVoiceTypingEnabled(false);
            const recognition = recognitionRef.current;
            recognition?.stop();
            setThread(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="flex justify-center gap-x-[15px] py-[15px]">
        <button
          className={` ${
            title.trim() || thread.trim() || ongoingTranscript.trim()
              ? "bg-[#4595d0] hover:bg-[#366588] "
              : "bg-gray-700"
          }
          py-[8px] px-[20px] rounded-[6px] cursor-pointer text-[14px] text-white `}
          onClick={() => {
            setPost(true);
          }}
          disabled={
            title.trim() || thread.trim() || ongoingTranscript.trim()
              ? false
              : true
          }
        >
          Post
        </button>

        <button
          className={`
          py-[8px] px-[9px] rounded-[50%] cursor-pointer ${
            isVoiceTypingEnabled
              ? "bg-[#4595d0] hover:bg-[#366588]"
              : "bg-gray-700"
          }  `}
          onClick={() => {
            handleToggleVoiceTyping();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-microphone"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z" />
            <path d="M5 10a7 7 0 0 0 14 0" />
            <path d="M8 21l8 0" />
            <path d="M12 17l0 4" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WriteThread;
