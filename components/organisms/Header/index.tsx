"use client";
import Button from "@/components/atoms/Button";
import { Navigations, Routers } from "@/config/routers";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DropdownsBox from "../DropdownsBox";
import CloseDropdown from "./CloseDropdown";
import Search from "./Search";
import ToggleTheme from "./ToggleTheme";

const DropdownsActions = ({ onClick, open }: { onClick: () => void; open: boolean }) => {
  return (
    <>
      <div className="max-sm:hidden">
        <Search />
      </div>
      <div className="min-sm:hidden" onClick={onClick}>
        {open ? <CloseDropdown /> : <Search />}
      </div>
    </>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleDropdownsAction = () => {
    setOpen((prev) => !prev);
  };
  return (
    <header className="bg-[#eef0f0] dark:bg-main-secondary">
      <div className="nft-container nft-offset-x flex items-center justify-between py-[30px]">
        <div className="flex items-center gap-[14px] max-sm:w-screen max-sm:justify-between">
          <div className="flex items-center gap-[14px]">
            <Image src="/icons/logo.svg" alt="logo" width={50} height={45} />
            <p className="text-color-white text-[23px] font-bold leading-[27px]">NFTs</p>
          </div>
          <DropdownsActions onClick={handleDropdownsAction} open={open} />
        </div>

        <nav className="max-sm:hidden">
          <ul className="flex items-center gap-[30px]">
            {Navigations.map((nav, key) => (
              <li key={`nav-item-${key}`}>
                <Link
                  href={nav.href}
                  className={clsx(
                    "text-color-white text-center text-[18px] font-semibold leading-[20px]"
                  )}
                >
                  {nav.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-[65px] max-sm:hidden">
          <Link
            href={Routers.signIn}
            className="text-color-white text-center text-[18px] font-semibold leading-[20px]"
          >
            Sign in
          </Link>
          <Button className="px-[31px] py-[15px] text-[16px] !font-bold leading-[20px] text-[#212A4D]">
            Create Account
          </Button>

          <ToggleTheme />
        </div>
      </div>
      <DropdownsBox open={open} setOpen={setOpen} />
    </header>
  );
};

export default Header;
