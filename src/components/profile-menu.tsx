import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import { ChevronsUpDown, List, LogOut, Settings, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

type Props = {};

export default function ProfileMenu({}: Props) {
  const { data: session, status } = useSession();

  const handleSignOut = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    signOut({ callbackUrl: "http://localhost:3000/login" });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <Button variant="ghost">
          <div className="flex gap-2 items-center">
            <Avatar className="h-9 w-9">
              <AvatarImage src={session?.user?.image || "/imgs/profile-pic.jpeg"} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="text-sm font-medium leading-none self-start">
                {session?.user?.name}
              </p>
              <p className="text-xs font-light leading-snug text-muted-foreground line-clamp-2 self-start">
                {session?.user?.email}
              </p>
            </div>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mt-2">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/profile/shubhamshinde225">
            <DropdownMenuItem>
              <User />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem disabled>
            <List />
            <span>Submissions</span>
          </DropdownMenuItem>
          <Link href="/settings">
            <DropdownMenuItem>
              <Settings />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleSignOut}
          className="cursor-pointer focus:bg-destructive focus:text-destructive-foreground"
        >
          <LogOut />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
