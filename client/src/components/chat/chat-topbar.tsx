import { IoVideocamOutline, IoCallOutline } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatTopbarProps {
  name: string;
  avatar: string;
}

const ChatTopbar = ({ name, avatar }: ChatTopbarProps) => {
  return (
    <div className="w-full h-20 flex p-4 justify-between items-center border-b">
      <div className="flex items-center gap-2">
        <Avatar className="cursor-pointer">
          <AvatarImage src={avatar} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">{name}</span>
          <span className="text-xs">Active 2 mins ago</span>
        </div>
      </div>
      <div className="flex gap-2">
        <IoCallOutline className="w-6 h-6" />
        <IoVideocamOutline className="w-6 h-6" />
      </div>
    </div>
  );
};

export default ChatTopbar;
