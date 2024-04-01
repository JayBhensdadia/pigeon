import ChatBottombar from "@/components/chat/chat-bottombar";
import ChatList from "@/components/chat/chat-list";
import ChatTopbar from "@/components/chat/chat-topbar";
import Sidebar from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import React from "react";
import { userData } from "@/tempdata";
import Chat from "@/components/chat/chat";
const Home = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      {/* <ChatTopbar name="Jay Bhensdadia" avatar="" /> */}
      {/* <ChatBottombar sendMessage={() => {}} isMobile={false} /> */}
      {/* <ChatList
        messages={userData.chats[0].messages}
        name="Jay"
        avatar=""
        sendMessage={() => {}}
        isMobile={false}
      /> */}

      <Chat
        messages={userData.chats[0].messages}
        chatId="chat1"
        isMobile={false}
      />
    </div>
  );
};

export default Home;
