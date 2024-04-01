import { Message } from "@/tempdata";
import { useState } from "react";
import ChatTopbar from "./chat-topbar";
import ChatList from "./chat-list";
import ChatBottombar from "./chat-bottombar";

interface ChatProps {
  messages?: Message[];
  chatId: string;
  isMobile: boolean;
}

const Chat = ({ messages, chatId, isMobile }: ChatProps) => {
  const [messagesState, setMessages] = useState<Message[]>(messages ?? []);

  const sendMessage = (newMessage: Message) => {
    setMessages([...messagesState, newMessage]);
  };
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <ChatTopbar name="Chat Name" avatar="" />

      <ChatList
        messages={messagesState}
        name="Chat Name"
        avatar=""
        sendMessage={sendMessage}
        isMobile={isMobile}
      />

      <ChatBottombar sendMessage={sendMessage} isMobile={isMobile} />
    </div>
  );
};

export default Chat;
