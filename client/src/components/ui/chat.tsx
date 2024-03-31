import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ChatHeaderProps {
  username: string;
  lastmessage: string;
  timestamp: string;
}

const Chat = ({ username, lastmessage, timestamp }: ChatHeaderProps) => {
  return (
    <div className="p-2 flex flex-row items-center gap-3 cursor-pointer rounded-lg hover:bg-slate-100 w-[300px] md:w-[400px]">
      <div className="">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-1 flex flex-col">
        <p className="text-lg font-semibold">{username}</p>
        <div className="flex flex-row justify-between">
          <p className="text-sm text-slate-500">{lastmessage}</p>
          <p className="text-sm text-slate-500">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
