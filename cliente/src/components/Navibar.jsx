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
} from "@nextui-org/react";
import { Link, Link as RouterLink } from "react-router-dom";
import { contexto } from "../context/ContextProvider.jsx";

const Navibar = () => {
  const { changeTheme, theme } = useContext(contexto);
  return (
    <Navbar isBordered maxWidth="full">
      <NavbarContent>
        <NavbarBrand>
          <p className=" font-black text-left text-4xl ">
            <RouterLink to={"/"} className="oscuro dark:claro">
              CRP
            </RouterLink>
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-1 md:ml-6 " justify="end">
        {theme === "dark" ? (
          <Button onClick={() => changeTheme(theme)} variant="light" isIconOnly className="m-2">
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
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </Button>
        ) : (
          <Button onClick={() => changeTheme(theme)} variant="light" isIconOnly className="m-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          </Button>
        )}
        <NavbarItem isActive>
          <Button className="bg-transparent hover:bg-neutral-100 dark:hover:bg-slate-100">
            <RouterLink to={"/"} className="py-2 -mx-3 px-3 flex gap-1 font-bold oscuro dark:claro">
              Inicio
            </RouterLink>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button className="bg-transparent hover:bg-success-100" variant="flat">
            <RouterLink to={"/about"} className="py-2 -mx-3 px-3 flex gap-1 font-bold oscuro dark:claro">
              ¿Quién soy?
            </RouterLink>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button className="bg-transparent hover:bg-purple-100">
            <RouterLink to={"/contact"} className="py-2 -mx-3 px-3 flex gap-1 font-bold oscuro dark:claro">
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
        <DropdownMenu aria-label="Menu Actions" variant="flat" className="font-bold">
          <DropdownItem key="comunidad">
            <Link to={"/"} className="pr-28 pl-3 flex gap-2 font-bold">
              Inicio
            </Link>
          </DropdownItem>
          <DropdownItem key="farmacia">
            <Link to={"/about"} className="pr-28 pl-3 flex gap-2 font-bold">
              ¿Quién soy?
            </Link>
          </DropdownItem>
          <DropdownItem key="social">
            <Link to={"/contact"} className="pr-28 pl-3 flex gap-2 font-bold">
              Contacto
            </Link>
          </DropdownItem>
          <DropdownItem key="dark" className="text-primary">
            {theme === "dark" ? (
              <Button onClick={() => changeTheme(theme)} variant="light">
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
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
                Modo Claro
              </Button>
            ) : (
              <Button onClick={() => changeTheme(theme)} variant="light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
                Modo Oscuro
              </Button>
            )}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Navbar>
  );
};

export default Navibar;
