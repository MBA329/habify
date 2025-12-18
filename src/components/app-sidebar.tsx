import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";


const items = [
  {
    title: "All Habits",
    url: "#",
    icon: Home,
  },
  {
    title: "types",
    url: "#",
    icon: Inbox,
  },
  {
    title: "good ones",
    url: "#",
    icon: Calendar,
  },
  {
    title: "bad ones",
    url: "#",
    icon: Search,
  },
  {
    title: "terrible ones",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* <SidebarGroup>
          <SidebarGroupLabel>
            garri
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup> */}
      </SidebarContent>
    </Sidebar>
  );
}
