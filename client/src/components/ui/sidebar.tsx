import Chat from "./chat";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { HiUserGroup } from "react-icons/hi2";

const Sidebar = () => {
  const chats = [
    {
      username: "Tony Stark",
      lastmessage: "where is the mark24???",
      timestamp: "12:01 AM",
    },
    {
      username: "Pepper Stark",
      lastmessage: "where is the mark24???",
      timestamp: "12:01 AM",
    },
  ];

  return (
    <div className="flex-col hidden md:block sm:max-w-[300px] md:max-w-[400px] py-2">
      <div className="flex items-center p-2 justify-between gap-5">
        <Input type="text" placeholder="search" />
        <div className="flex flex-row gap-2">
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <button>
            <HiUserGroup className="w-10 h-10 hover:text-slate-500" />
          </button>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="space-y-1 py-2">
        {chats.map((chat) => {
          return (
            <div key={chat.username}>
              <Chat
                username={chat.username}
                lastmessage={chat.lastmessage}
                timestamp={chat.timestamp}
              />
              <Separator className="my-1" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
