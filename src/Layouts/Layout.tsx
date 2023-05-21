import React, { createContext, useEffect, useState } from "react";
import Tooltip from "../components/util/Tooltip";
import { useSnackbar } from "../util";
import SnackBar from "../components/util/SnackBar";
const TabContext = createContext<string | undefined>(undefined);
const LogOutContext = createContext<boolean | undefined>(undefined);
const SideBarStatusContext = createContext<boolean | undefined>(undefined);
const SetLogOutContext = createContext<
  React.Dispatch<React.SetStateAction<boolean>> | undefined
>(undefined);
const Layout = ({ children }: any) => {
  const [open, setOpen] = useState<boolean>(true);
  const [tab, setTab] = useState<string>("profile");
  const [logout, setLogout] = useState<boolean | any>(false);
  const { snackbar, showSnackbar }: any = useSnackbar();
  const openSidebar = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (
      localStorage.getItem("sxs_key") === "" ||
      localStorage.getItem("sxs_key") === null ||
      localStorage.getItem("sxs_key") === undefined
    ) {
      setOpen(false);
    } else {
      setOpen(false);
    }
  }, []);

  return (
    <div
      className={`font-sans flex  z-[9999999] fixed right-0 top-0 h-[100vh] app`}
    >
      {snackbar && <SnackBar message={snackbar.message} type={snackbar.type} />}

      <nav className="absolute py-[10px] top-[50px] -left-[50px] w-[50px] bg-black h-[340px] rounded-l-[8px] flex flex-col items-center justify-around gap-[4px]">
        {/* Sidebar opener arrow */}
        <div
          className="w-[30px] bdr-white-all mycenter p-[4px] rounded-[6px] cursor-pointer  hover:!border-white"
          onClick={() => openSidebar()}
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-left w-[20px] h-[20px] rotate-180 transition-all "
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="5" y1="12" x2="11" y2="18" />
              <line x1="5" y1="12" x2="11" y2="6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-left w-[20px] h-[20px] transition-all "
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="5" y1="12" x2="11" y2="18" />
              <line x1="5" y1="12" x2="11" y2="6" />
            </svg>
          )}
        </div>

        {/* Notification */}

        <Tooltip content="Notifications">
          <div
            className={`w-[30px] border-white mycenter p-[4px] rounded-[6px]  cursor-pointer ${
              tab === "notification"
                ? "bg-gradient-to-r  from-cyan-500 from-10% via-blue-500 via-30% to-black-500 to-90%"
                : "hover:bg-gradient-to-r  from-cyan-500 from-10% via-blue-500 via-30% to-black-500 to-90%"
            } `}
            onClick={() => {
              setTab("notification");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-bell w-[20px] h-[20px] "
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
              <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
            </svg>
          </div>
        </Tooltip>

        {/* Profile */}

        <Tooltip content="Profile">
          <div
            className={`w-[30px] mycenter p-[4px] rounded-[6px]  cursor-pointer ${
              tab === "profile"
                ? "bg-gradient-to-r  from-cyan-500 from-10% via-blue-500 via-30% to-black-500 to-90%"
                : "hover:bg-gradient-to-r  from-cyan-500 from-10% via-blue-500 via-30% to-black-500 to-90%"
            } `}
            onClick={() => setTab("profile")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-user w-[20px] h-[20px] "
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="7" r="4" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
          </div>
        </Tooltip>
        <Tooltip content="Feeds">
          {/* Feed */}
          <div
            className={`w-[30px] mycenter p-[4px] rounded-[6px]  cursor-pointer ${
              tab === "feed"
                ? "bg-gradient-to-r  from-cyan-500 from-10% via-blue-500 via-30% to-black-500 to-90%"
                : "hover:bg-gradient-to-r  from-cyan-500 from-10% via-blue-500 via-30% to-black-500 to-90%"
            } `}
            onClick={() => setTab("feed")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-rss w-[20px] h-[20px] "
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="5" cy="19" r="1" />
              <path d="M4 4a16 16 0 0 1 16 16" />
              <path d="M4 11a9 9 0 0 1 9 9" />
            </svg>
          </div>
        </Tooltip>

        {/* Roadmap */}
        <Tooltip content="Roadmap">
          <div
            className={`w-[30px] border-white mycenter p-[4px] rounded-[6px]  cursor-pointer ${
              tab === "roadmap"
                ? "bg-gradient-to-r  from-cyan-500 from-10% via-blue-500 via-30% to-black-500 to-90%"
                : "hover:bg-gradient-to-r  from-cyan-500 from-10% via-blue-500 via-30% to-black-500 to-90%"
            } `}
            onClick={() => setTab("roadmap")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-route  w-[20px] h-[20px]"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="6" cy="19" r="2" />
              <circle cx="18" cy="5" r="2" />
              <path d="M12 19h4.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h3.5" />
            </svg>
          </div>
        </Tooltip>

        {/* Series */}
        <Tooltip content="Series">
          <div
            className={`w-[30px] border-white mycenter p-[4px] rounded-[6px]  cursor-pointer ${
              tab === "series"
                ? "bg-gradient-to-r  from-cyan-500 from-10% via-blue-500 via-30% to-black-500 to-90%"
                : "hover:bg-gradient-to-r  from-cyan-500 from-10% via-blue-500 via-30% to-black-500 to-90%"
            } `}
            onClick={() => setTab("series")}
          >
            <svg
              xmlns="http://ww
            w.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-stack-2 w-[20px] h-[20px]"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="12 4 4 8 12 12 20 8 12 4" />
              <polyline points="4 12 12 16 20 12" />
              <polyline points="4 16 12 20 20 16" />
            </svg>
          </div>
        </Tooltip>

        <Tooltip content="Shows">
          {/* Show */}
          <div
            className={`w-[30px]  border-white mycenter p-[4px] rounded-[6px]  cursor-pointer ${
              tab === "show"
                ? "bg-gradient-to-r  from-cyan-500 from-10% via-blue-500 via-30% to-black-500 to-90%"
                : "hover:bg-gradient-to-r  from-cyan-500 from-10% via-blue-500 via-30% to-black-500 to-90%"
            } `}
            onClick={() => setTab("show")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-book w-[20px] h-[20px] "
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
              <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
              <line x1="3" y1="6" x2="3" y2="19" />
              <line x1="12" y1="6" x2="12" y2="19" />
              <line x1="21" y1="6" x2="21" y2="19" />
            </svg>
          </div>
        </Tooltip>

        {/* Community */}

        <Tooltip content="Communites">
          <div
            className={`w-[30px] border-white mycenter p-[4px] rounded-[6px]  cursor-pointer ${
              tab === "community"
                ? "bg-gradient-to-r  from-cyan-500 from-10% via-blue-500 via-30% to-black-500 to-90%"
                : "hover:bg-gradient-to-r  from-cyan-500 from-10% via-blue-500 via-30% to-black-500 to-90%"
            } `}
            onClick={() => setTab("community")}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-social w-[20px] h-[20px] "
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="5" r="2" />
              <circle cx="5" cy="19" r="2" />
              <circle cx="19" cy="19" r="2" />
              <circle cx="12" cy="14" r="3" />
              <line x1="12" y1="7" x2="12" y2="11" />
              <line x1="6.7" y1="17.8" x2="9.5" y2="15.8" />
              <line x1="17.3" y1="17.8" x2="14.5" y2="15.8" />
            </svg>
          </div>
        </Tooltip>

        <Tooltip content="Bookmarks">
          {/* Bookmark */}
          <div
            className={`w-[30px] border-white mycenter p-[4px] rounded-[6px]  cursor-pointer ${
              tab === "bookmark"
                ? "bg-gradient-to-r  from-cyan-500 from-10% via-blue-500 via-30% to-black-500 to-90%"
                : "hover:bg-gradient-to-r  from-cyan-500 from-10% via-blue-500 via-30% to-black-500 to-90%"
            } `}
            onClick={() => setTab("bookmark")}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-bookmarks w-[20px] h-[20px] "
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M13 7a2 2 0 0 1 2 2v12l-5 -3l-5 3v-12a2 2 0 0 1 2 -2h6z" />
              <path d="M9.265 4a2 2 0 0 1 1.735 -1h6a2 2 0 0 1 2 2v12l-1 -.6" />
            </svg>
          </div>
        </Tooltip>
      </nav>
      <div
        className={`bg-black transition-all ${
          open ? "w-[400px] bdr-l " : "w-[0px] bdr-l"
        } `}
      >
        {/* Header */}
        <div className="h-[50px] w-full flex items-center justify-between bg-grey px-[12px] bdr-b">
          <img
            src="https://res.cloudinary.com/ddlhk5yje/image/upload/v1683317102/showwcasexs/showwcaseXS_efwweq.png"
            alt="ShowwcaseXS header logo"
            className="w-[40px] h-[40px]"
          />

          <Tooltip content="Logout">
            <button
              onClick={() => {
                localStorage.setItem("sxs_key", "");
                if (!logout) {
                  showSnackbar("Logged out successfully!", 3, "logout");
                }
                setLogout(true);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-logout w-[24px] h-[24px] "
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                <path d="M7 12h14l-3 -3m0 6l3 -3" />
              </svg>
            </button>
          </Tooltip>
        </div>
        <SideBarStatusContext.Provider value={open}>
          <SetLogOutContext.Provider value={setLogout}>
            <LogOutContext.Provider value={logout}>
              <TabContext.Provider value={tab}>{children}</TabContext.Provider>
            </LogOutContext.Provider>
          </SetLogOutContext.Provider>
        </SideBarStatusContext.Provider>

        {/* footer */}
        {open && (
          <div
            className={`h-[30px] w-full text-white mycenter bg-grey px-[12px] bdr-t bdr-l absolute bottom-0 right-0 bg-black `}
          >
            <small className="text-[11px]">
              Made with &lt; 🧠 /&gt; by{" "}
              <a
                href="https://twitter.com/PriteshKiri"
                className="text-white sxs-link hover:underline"
              >
                Pritesh Kiri
              </a>
            </small>
          </div>
        )}
      </div>
    </div>
  );
};

export {
  Layout,
  TabContext,
  LogOutContext,
  SetLogOutContext,
  SideBarStatusContext,
};
