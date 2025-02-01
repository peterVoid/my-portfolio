import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Page() {
  return (
    <div className="flex h-[75vh] w-full flex-col items-center justify-center space-y-6">
      <h1 className="text-[12rem] font-light leading-none tracking-wider">
        404
      </h1>
      <p className="font-mono text-2xl">Page Under Construction</p>
      <p className="text-lg text-muted-foreground">
        We are working on this page. Please check back later!
      </p>
      <Button asChild variant="secondary" className="mt-8 gap-2">
        <Link href="/">
          <Home className="h-4 w-4" />
          Home
        </Link>
      </Button>
    </div>
  );
}
