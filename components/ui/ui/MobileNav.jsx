"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/*logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-3xl font-semibold ">
              Raushan
              <span className="text-accent">.</span>
            </h1>
          </Link>
          <nav className="flex flex-col justify-center items-center gap-8 pt-20">
            {links.map((link, index) => {
              return (
                <Link
                  href={link.path}
                  key={index}
                  className={`${
                    link.path === pathname &&
                    "text-accent border-b-2 border-accent"
                  }text-lg capitalize hover:text-accent transition-all`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <VisuallyHidden>
          <DialogTitle>Navigation Menu</DialogTitle>
        </VisuallyHidden>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
