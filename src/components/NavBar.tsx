import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon, ShoppingCart } from "lucide-react";
import { NAV_LINKS } from "@/constants/navbar.constant";

const NavBar = () => {
  return (
    <div className="bg-white py-3 lg:py-4">
      <Container>
        <div className="flex justify-between">
          <Link to={"/"}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Sport<span className="text-blue-900">Craze</span>
            </h3>
          </Link>
          <div className="flex items-center gap-5">
            <div className="hidden md:block space-x-5">
              {NAV_LINKS.map((navLink) => (
                <NavLink
                  key={navLink.path}
                  to={navLink.path}
                  className={({ isActive }) =>
                    isActive ? "border-b-2 border-blue-900" : ""
                  }
                >
                  {navLink.page}
                </NavLink>
              ))}
            </div>
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <MenuIcon />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-52">
                  <DropdownMenuGroup>
                    {NAV_LINKS.map((navLink) => (
                      <DropdownMenuItem key={navLink.path}>
                        <NavLink
                          to={navLink.path}
                          className={({ isActive }) =>
                            isActive ? "border-b-2 border-blue-900" : ""
                          }
                        >
                          {navLink.page}
                        </NavLink>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <NavLink to={"/cart"}>
              <ShoppingCart />
            </NavLink>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
