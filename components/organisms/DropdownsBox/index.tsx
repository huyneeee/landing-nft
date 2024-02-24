import Button from "@/components/atoms/Button";
import { Navigations, Routers } from "@/config/routers";
import clsx from "clsx";
import Link from "next/link";
import ToggleTheme from "../Header/ToggleTheme";
import { Dispatch } from "react";

type Props = {
  open?: boolean;
  setOpen?: Dispatch<React.SetStateAction<boolean>>;
};

const DropdownsBox = ({ open }: Props) => {
  return (
    <div
      className={clsx(
        "absolute z-10 mx-4 mt-2 flex w-[-webkit-fill-available] origin-top-right flex-col gap-20 rounded-md bg-[#F1F2F3] py-6 shadow-lg  focus:outline-none dark:bg-[#101A2E]",
        open ? "block" : "hidden"
      )}
    >
      <nav>
        <ul className="flex flex-col items-center gap-[10px]">
          {Navigations.map((nav, key) => (
            <li key={`nav-item-${key}`}>
              <Link
                href={nav.href}
                className={clsx(
                  "text-color-white text-center text-[25px] font-semibold leading-[60px]"
                )}
              >
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col gap-4">
            <Button color="outline">
              <Link href={Routers.signIn} className="!font-bold">
                Sign in
              </Link>
            </Button>
            <Button className="px-[31px] py-[15px] text-[16px] !font-bold leading-[20px] text-[#212A4D]">
              Create Account
            </Button>
          </div>

          <ToggleTheme />
        </div>
      </div>
    </div>
  );
};

export default DropdownsBox;
