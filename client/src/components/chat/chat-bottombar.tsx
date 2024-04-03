import { useRef, useState } from "react";
import { LuSendHorizonal } from "react-icons/lu";

import { Textarea } from "@/components/ui/textarea";
import { EmojiPicker } from "../emoji-picker";

import { Message } from "@/tempdata";

interface ChatBottombarProps {
  sendMessage: (msg: Message) => void;
  isMobile: boolean;
}

const ChatBottombar = ({ sendMessage, isMobile }: ChatBottombarProps) => {
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSend = () => {
    message.trim();
    if (message.length == 0) return;
    const rand = String(Math.random());
    const msg: Message = {
      id: rand,
      chatId: "chat1",
      content: message,
      sender: "userid1",
    };
    // console.log("inside send message calll");
    // console.log(msg);

    sendMessage(msg);
    setMessage("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }

    if (event.key === "Enter" && event.shiftKey) {
      event.preventDefault();
      setMessage((prev) => prev + "\n");
    }
  };
  return (
    <div className="p-2 flex justify-between w-full items-center gap-2 ">
      <div className="flex-1 flex items-center gap-2">
        <Textarea
          autoComplete="off"
          value={message}
          ref={inputRef}
          onKeyDown={handleKeyPress}
          onChange={handleInputChange}
          name="message"
          placeholder="type your message here...."
          className="w-full rounded-lg bg-background"
        />

        <button className="pointer-cursor rounded-lg p-2 hover:bg-slate-200">
          <LuSendHorizonal className="w-6 h-6" />
        </button>
        <EmojiPicker
          onChange={(value) => {
            setMessage(message + value);
            if (inputRef.current) {
              inputRef.current.focus();
            }
          }}
        />
      </div>
    </div>
  );
};

export default ChatBottombar;
