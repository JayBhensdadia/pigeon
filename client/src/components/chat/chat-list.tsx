import { cn } from "@/lib/utils";
import { Message, userData, Chat } from "@/tempdata";
import React, { useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ChatBottombar from "./chat-bottombar";

interface ChatListProps {
  chat: Chat;
  isMobile: boolean;
}

const currentUserid = "userid1";
const ChatList = ({ chat, isMobile }: ChatListProps) => {
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [chat]);
  return (
    <div className="w-full overflow-x-hidden h-full flex flex-col">
      <div
        ref={messagesContainerRef}
        className="w-full overflow-y-scroll overflow-x-hidden h-full flex flex-col gap-1"
      >
        {chat.messages?.map((message, index) => {
          return (
            <div
              key={message.id}
              className={cn(
                "flex flex-col gap-2 px-4 whitespace-pre-wrap",
                message.sender == currentUserid ? "items-end" : "items-start"
              )}
            >
              <span className=" bg-accent p-3 rounded-md max-w-xs">
                {message.content}
              </span>
              {/* <div className="flex gap-3 items-center">
                <Avatar className="cursor-pointer">
                  <AvatarImage src={"avatar"} />
                  <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
                </Avatar>
                
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatList;
