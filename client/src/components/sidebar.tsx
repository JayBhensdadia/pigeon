import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { HiUserGroup } from "react-icons/hi2";
import { Separator } from "@/components/ui/separator";
import { Chat } from "@/tempdata";
import classNames from "classnames";

interface SidebarProps {
  chats: Chat[];
  isMobile: boolean;
  isVisible: boolean;
}

const Sidebar = ({ chats, isMobile, isVisible }: SidebarProps) => {
  return (
    <div
      className={classNames({
        "w-full h-full flex-col  py-2": true,
        "flex-1": isMobile,
        "max-w-[400px]": !isMobile,
        hidden: !isVisible,
      })}
    >
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

      <Separator className="my-1" />

      <div className="space-y-1 py-2">
        {chats.map((chat) => {
          return (
            <div key={chat.id} className="">
              <div className="flex  items-center gap-2 py-2 px-2 rounded-lg hover:bg-slate-200 cursor-pointer">
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-medium">{chat.name}</span>
                  <span className="text-xs">Active 2 mins ago</span>
                </div>
              </div>
              <Separator className="my-1" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
