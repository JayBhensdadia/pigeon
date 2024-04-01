import { cn } from "@/lib/utils";
import { Message, userData } from "@/tempdata";
import React, { useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ChatBottombar from "./chat-bottombar";

interface ChatListProps {
  messages?: Message[];
  name: string;
  avatar: string;
  sendMessage: (msg: Message) => void;
  isMobile: boolean;
}

const currentUserid = "userid1";
const ChatList = ({
  messages,
  name,
  avatar,
  sendMessage,
  isMobile,
}: ChatListProps) => {
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <div className="w-full overflow-y-auto overflow-x-hidden h-full flex flex-col">
      <div
        ref={messagesContainerRef}
        className="w-full overflow-y-auto overflow-x-hidden h-full flex flex-col"
      >
        {messages?.map((message, index) => {
          return (
            <div
              className={cn(
                "flex flex-col gap-2 p-4 whitespace-pre-wrap",
                message.sender !== currentUserid ? "items-end" : "items-start"
              )}
            >
              <div className="flex gap-3 items-center">
                <Avatar className="cursor-pointer">
                  <AvatarImage src={avatar} />
                  <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className=" bg-accent p-3 rounded-md max-w-xs">
                  {message.content}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatList;
