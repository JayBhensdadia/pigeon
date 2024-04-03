import ChatBottombar from "@/components/chat/chat-bottombar";
import ChatList from "@/components/chat/chat-list";
import ChatTopbar from "@/components/chat/chat-topbar";

import { Separator } from "@/components/ui/separator";
import React, { useEffect, useState } from "react";
import { userData } from "@/tempdata";
import Chat from "@/components/chat/chat";
import Sidebar from "@/components/sidebar";
import classname from "classnames";
import { SiLivechat } from "react-icons/si";
import { FaList } from "react-icons/fa";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isChatVisible, setIsChatVisible] = useState(true);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    const checkScreenWidth = () => {
      if (window.innerWidth > 768) {
        setIsChatVisible(true);
        setIsSidebarVisible(true);
      } else {
        setIsChatVisible(false);
        setIsSidebarVisible(true);
      }
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkScreenWidth();

    // Event listener for screen width changes
    window.addEventListener("resize", checkScreenWidth);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex w-full h-full">
        <Sidebar
          chats={userData.chats}
          isMobile={isMobile}
          isVisible={isSidebarVisible}
        />

        <Separator orientation="vertical" />
        <Chat
          chat={userData.chats[0]}
          isMobile={isMobile}
          isVisible={isChatVisible}
        />
      </div>

      <div
        className={classname({
          "w-full flex justify-around items-center bg-slate-100 rounded-lg":
            true,
          hidden: !isMobile,
        })}
      >
        <button
          onClick={() => {
            setIsChatVisible(false);
            setIsSidebarVisible(true);
          }}
          className="p-2"
        >
          <div
            className={classname({
              "flex flex-col justify-center items-center p-2": true,
              " bg-slate-300 rounded-lg": isSidebarVisible,
            })}
          >
            <FaList className="w-6 h-6 text-slate-500 " />
            <p className="text-sm text-slate-500">Sidebar</p>
          </div>
        </button>
        <button
          onClick={() => {
            setIsSidebarVisible(false);
            setIsChatVisible(true);
          }}
        >
          <div
            className={classname({
              "flex flex-col justify-center items-center p-2": true,
              " bg-slate-300 rounded-lg": isChatVisible,
            })}
          >
            <SiLivechat className="w-6 h-6 text-slate-500 " />
            <p className="text-sm text-slate-500">Chats</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Home;
