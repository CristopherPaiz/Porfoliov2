import React, { useContext } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { Link, Link as RouterLink } from "react-router-dom";

const Navibar = () => {
  return (
    <Navbar>
      <NavbarContent>
        <NavbarBrand>
          <p className=" font-bold text-inherit text-left">
            <RouterLink to={"/"} className="py-2 -mx-3 px-3 text-[16px]">
              CRP
            </RouterLink>
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-1 md:ml-6" justify="end">
        <NavbarItem isActive>
          <Button className="bg-transparent hover:bg-primary-100">
            <RouterLink to={"/"} className="py-2 -mx-3 px-3 flex gap-1">
              Inicio
            </RouterLink>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button className="bg-transparent hover:bg-success-100" variant="flat">
            <RouterLink to={"/about"} className="py-2 -mx-3 px-3 flex gap-1">
              ¿Quién soy?
            </RouterLink>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button className="bg-transparent hover:bg-purple-100">
            <RouterLink to={"/contact"} className="py-2 -mx-3 px-3 flex gap-1">
              Contacto
            </RouterLink>
          </Button>
        </NavbarItem>
      </NavbarContent>
      <Dropdown placement="bottom-end" className="sm:hidden">
        <DropdownTrigger className="sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </DropdownTrigger>
        <DropdownMenu aria-label="Menu Actions" variant="flat">
          <DropdownItem key="comunidad">
            <Link to={"/"} className="pr-28 pl-3 flex gap-2">
              Inicio
            </Link>
          </DropdownItem>
          <DropdownItem key="farmacia">
            <Link to={"/about"} className="pr-28 pl-3 flex gap-2">
              ¿Quién soy?
            </Link>
          </DropdownItem>
          <DropdownItem key="social">
            <Link to={"/contact"} className="pr-28 pl-3 flex gap-2">
              Contacto
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Navbar>
  );
};

export default Navibar;
