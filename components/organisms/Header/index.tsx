import { IconSearch } from "@/assets/icons/IconSearch";
import Button from "@/components/atoms/Button";
import IconButton from "@/components/atoms/IconButton";
import { Navigations, Routers } from "@/config/routers";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-[#eef0f0] dark:bg-main-secondary ">
      <div className="nft-container nft-offset-x flex items-center justify-between py-[30px]">
        <div className="flex items-center gap-[14px]">
          <Image src="/icons/logo.svg" alt="logo" width={50} height={45} />
          <p className="text-color-white text-[23px] font-bold leading-[27px]">NFTs</p>

          <IconButton className="ml-[50px] h-[55px] w-[55px]">
            <IconSearch />
          </IconButton>
        </div>

        <nav>
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

        <div className="flex items-center gap-[65px]">
          <Link
            href={Routers.signIn}
            className="text-color-white text-center text-[18px] font-semibold leading-[20px]"
          >
            Sign in
          </Link>
          <Button className="px-[31px] py-[15px] text-[16px] !font-bold leading-[20px] text-[#212A4D]">
            Create Account
          </Button>

          <IconButton>
            <Image src="/icons/icon-sun.svg" alt="icon" width={30} height={30} />
          </IconButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
