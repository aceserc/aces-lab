import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

import Logo from "@/assets/logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth } from "@/config/firebase";
import useAuth from "@/hooks/use-auth";

export function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src={Logo} alt="Logo" />
              <span className="ml-2 text-xl font-bold">Letter Generator</span>
            </Link>
          </div>
          <div className="flex items-center">
            {user
              ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user?.photoURL ?? ""} alt={user?.displayName ?? "user-image"} />
                          <AvatarFallback>{user.displayName?.charAt(0) ?? ""}</AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Link to="/">Settings</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={async () => await signOut(auth)}>
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              : (
                  <Button>
                    <Link to="/login">Login</Link>
                  </Button>
                )}
          </div>
        </div>
      </div>
    </nav>
  );
}
