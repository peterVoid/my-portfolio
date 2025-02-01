import { Home } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <div className="flex h-[75vh] w-full flex-col items-center justify-center space-y-6">
      <h1 className="text-[12rem] font-light leading-none tracking-wider">
        404
      </h1>
      <p className="font-mono text-2xl">Not Found</p>
      <p className="text-lg text-muted-foreground">This page does not exist.</p>
      <Button asChild variant="secondary" className="mt-8 gap-2">
        <Link href="/">
          <Home className="h-4 w-4" />
          Go Home
        </Link>
      </Button>
    </div>
  );
}
