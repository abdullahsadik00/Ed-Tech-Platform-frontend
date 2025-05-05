import { SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Search } from "lucide-react";
import { Input } from "./input";
import { Button } from "./button";

export function Header() {
  return (
    <header className=" backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex py-2 items-center px-4 gap-4">
        <SidebarTrigger />

        <div className="flex flex-1 items-center justify-between">
          <div className="flex items-center gap-4">
            <form className="relative hidden md:flex bg-[#f3f4fa] focus:outline-none">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground " color="#8c8c8c" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-64 rounded-lg bg-background pl-8 md:w-80 focus:outline-8
                focus-visible:border-ring focus-visible:ring-ring/10 focus-visible:ring-[0px]
                "
              />
            </form>
          </div>


          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1.5 top-1.5 flex h-2 w-2 rounded-full bg-primary" />
              <span className="sr-only">Notifications</span>
            </Button>

            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>US</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header >
  );
}