import { useState } from "react";

function App() {
  const [open, setOpen] = useState(true);
  const openSidebar = () => {
    setOpen(!open);
  };
  return (
    <div className="flex  z-[9999999] fixed right-0 top-0 h-[100vh] app">
      <div className="absolute py-[10px] top-[50px] -left-[50px] w-[50px] bg-black h-[260px] rounded-l-lg flex flex-col items-center justify-around gap-1 border-r-[1px] border-slate-600">
        <div
          className="w-[30px] border-1 border-white rounder-md mycenter p-1 rounded-md hover:bg-gradient-to-r  from-cyan-500 from-10% via-blue-500 via-30% to-black-500 to-90%"
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
        <div
          className="w-[30px] border-1 border-white rounder-md mycenter p-1 rounded-md hover:bg-gradient-to-r  from-cyan-500 from-10% via-blue-500 via-30% to-black-500 to-90%"
          onClick={() => openSidebar()}
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
        <div
          className="w-[30px] border-1 border-white rounder-md mycenter  p-1 rounded-md hover:bg-gradient-to-r  from-cyan-500 from-10% via-blue-500 via-30% to-black-500 to-90%"
          onClick={() => openSidebar()}
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
        <div
          className="w-[30px] border-1 border-white rounder-md mycenter  p-1 rounded-md hover:bg-gradient-to-r  from-cyan-500 from-10% via-blue-500 via-30% to-black-500 to-90%"
          onClick={() => openSidebar()}
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
        <div
          className="w-[30px] border-1 border-white rounder-md mycenter  p-1 rounded-md hover:bg-gradient-to-r  from-cyan-500 from-10% via-blue-500 via-30% to-black-500 to-90%"
          onClick={() => openSidebar()}
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
        <div
          className="w-[30px] border-1 border-white rounder-md mycenter  p-1 rounded-md hover:bg-gradient-to-r  from-cyan-500 from-10% via-blue-500 via-30% to-black-500 to-90%"
          onClick={() => openSidebar()}
        >
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
        <div
          className="w-[30px] border-1 border-white rounder-md mycenter  p-1 rounded-md hover:bg-gradient-to-r  from-cyan-500 from-10% via-blue-500 via-30% to-black-500 to-90%"
          onClick={() => openSidebar()}
        >
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
      </div>
      <div
        className={`bg-black  transition-all ${
          open ? "w-[400px]" : "w-[0px]"
        } `}
      >
        <h1>Main content</h1>
      </div>
    </div>
  );
}

export default App;
