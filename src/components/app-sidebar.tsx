import { Calendar, Home, Inbox, Search, Settings,ChevronDown,ListCollapseIcon } from "lucide-react";
import AddHabitButton from "./add-habit";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  
} from "@/components/ui/sidebar";

import Link from "next/link";

import { DropdownMenu,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuItem } from "@/components/ui/dropdown-menu";

const items = [
  {},{},{}
]

export function AppSidebar() {

 
  return (
    <Sidebar side="left">
      <SidebarHeader className="">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="borde p-5 bg-gray-200">
                  <div className="bg-orange-600 rounded-full size-4 p-3 flex justify-center items-center">
                    <span className="text-white">E</span>
                  </div>
                  Emmauel Mba
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                <DropdownMenuItem className="hover:bg-blue-800 cursor-pointer">
                  <span className="">Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-blue-800 cursor-pointer">
                  <span>Sign Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/journal/all-habits">
              <SidebarMenuButton className="pl-4 cursor-pointer "><ListCollapseIcon className="mr-2" />All Habits</SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
