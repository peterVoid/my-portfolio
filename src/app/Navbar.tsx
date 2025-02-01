"use client";

import MainLayoutWrapper from "@/components/MainLayoutWrapper";
import { SwitchThemeToggle } from "@/components/SwitchThemeToggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsSmallScreen } from "@/hooks/useSmallScreen";
import { formatDate } from "date-fns";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const isSmallScreen = useIsSmallScreen();

  const [time, setTime] = useState(formatDate(new Date(), "h:mm aa"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatDate(new Date(), "h:mm aa"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <MainLayoutWrapper>
      <header className="flex w-full items-center justify-between p-3">
        <Link href="/" className="text-xl font-semibold">
          Haikal
        </Link>
        <div>
          <h3 className="text-xl font-semibold" suppressHydrationWarning>
            {time} - <span>Bogor</span>
          </h3>
        </div>
        {isSmallScreen && <SmallScreenRightMenu />}
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" className="font-semibold" asChild>
            <Link href="/blog">Blog</Link>
          </Button>
          <Button variant="ghost" className="font-semibold">
            <Link href="/project">Project</Link>
          </Button>
          <SwitchThemeToggle />
        </div>
      </header>
    </MainLayoutWrapper>
  );
}

function SmallScreenRightMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-center">Menu</SheetTitle>
          <SheetDescription className="absolute top-2">
            <SwitchThemeToggle />
          </SheetDescription>
        </SheetHeader>
        <div className="mt-5 space-y-2">
          <Button className="w-full" variant="ghost">
            Blog
          </Button>
          <Button className="w-full" variant="ghost">
            Project
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
