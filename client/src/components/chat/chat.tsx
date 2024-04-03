import { useState } from "react";
import ChatTopbar from "./chat-topbar";
import ChatList from "./chat-list";
import ChatBottombar from "./chat-bottombar";
import { Message, Chat as ChatInterface } from "@/tempdata";
import classNames from "classnames";
interface ChatProps {
  chat: ChatInterface;
  isMobile: boolean;
  isVisible: boolean;
}

const Chat = ({ chat, isMobile, isVisible }: ChatProps) => {
  const [chatState, setChatState] = useState<ChatInterface>(chat);

  const sendMessage2 = (newMessage: Message) => {
    const newState = {
      id: chatState.id,
      name: chatState.name,
      members: chatState.members,
      messages: [...chatState.messages, newMessage],
    };

    // console.log(newState);

    setChatState(newState);
    // console.log(chatState);
  };

  return (
    <div
      className={classNames({
        "flex flex-col justify-between w-full h-full": true,
        hidden: !isVisible,
      })}
    >
      <ChatTopbar name="Chat Name" avatar="" />

      <ChatList chat={chatState} isMobile={isMobile} />

      <ChatBottombar sendMessage={sendMessage2} isMobile={isMobile} />
    </div>
  );
};

export default Chat;
