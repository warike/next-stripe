"use client"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

import { get, head } from 'lodash';
import { Icons } from "../shared/Icons"
import { SignOutButton, useUser } from "@clerk/nextjs";

export function NavUser() {
  const { user } = useUser();
  const { isMobile } = useSidebar()
    const data = {
      name: get(user, "firstName", "")!,
      email: get(user, "primaryEmailAddress.emailAddress", ""),
      avatar: get(user,"imageUrl", "")
    }
  const prefix = head(data.name)

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={data.avatar} alt={data.name} className=""/>
                <AvatarFallback className="rounded-lg">{prefix}</AvatarFallback>
              </Avatar>
              <div className="hidden sm:grid flex-1 text-left text-xs leading-tight">
                <span className="truncate font-semibold">{data.name}</span>
                <span className="truncate text-xs">{data.email}</span>
              </div>
              <Icons.chevronDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "bottom"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuItem>
              <SignOutButton redirectUrl={'/'}>
                <div className="flex gap-2 text-xs">
                  <Icons.logOut className="ml-auto size-4" /> Log out
                </div>
              </SignOutButton>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
