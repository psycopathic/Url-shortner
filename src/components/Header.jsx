import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LinkIcon,LogOut } from "lucide-react";
const Header = () => {
  const navigate = useNavigate();
  const user = true;
  return (
    <nav className="py-4 flex items-center justify-between ">
      <Link to="/">
        <img src="../../public/logo.png" className="h-20" alt="Trimrr logo" />
      </Link>

      <div>
        {!user ? (
          <Button className="cursor-pointer" onClick={() => navigate("/auth")}>
            Login
          </Button>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger className="w-10 rounded-full overflow-hidden">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback >HS</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="cursor-pointer">Harsh Shrivastava</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                 <Link to="/dashboard" className="flex">
                    <LinkIcon className="mr-2 h-4 w-4" />
                    My Links
                  </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center text-red-400">
                <LogOut className="mr-2 h-4 w-4" />
                <span className="text-red-400 cursor-pointer">Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </nav>
  );
};

export default Header;
