"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { Magnetic } from "../ui/magnetic";
import { TextEffect } from "../ui/text-effect";

export default function HeroSection() {
  const handleClickButton = (platform: "GITHUB" | "LIKEDIN") => {
    if (platform === "GITHUB") {
      window.location.href = "https://github.com/peterVoid";
    } else {
      window.location.href =
        "https://www.linkedin.com/in/haikal-alhakim-b02626287/";
    }
  };

  return (
    <div className="flex h-[560px] items-center px-2">
      <div className="space-y-7">
        <div className="text-md flex items-center gap-3 font-bold text-primary md:text-xl">
          <div className="h-1 w-[76px] bg-slate-500" />
          <TextEffect per="word" as="h3" preset="slide">
            Welcome, New & Old Friends!
          </TextEffect>
        </div>
        <TextEffect
          preset="fade-in-blur"
          speedReveal={1.1}
          speedSegment={0.3}
          className="text-5xl font-bold tracking-wide md:text-7xl"
        >
          I&apos;m Haikal
        </TextEffect>
        <div className="space-y-3 text-lg font-bold md:text-2xl">
          <p className="text-xl leading-tight">
            A{" "}
            <span className="border-b-4 border-dotted border-primary pb-0.5">
              Software Engineering
            </span>{" "}
            Student
          </p>
          <p className="-mt-3 text-muted-foreground">
            Exploring the Boundaries of Software Engineering.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Magnetic
            intensity={0.2}
            springOptions={{ bounce: 0.1 }}
            actionArea="global"
            range={100}
          >
            <Button
              size="lg"
              className="text-md font-semibold"
              onClick={() => handleClickButton("GITHUB")}
            >
              <Github className="size-8" /> Github
            </Button>
          </Magnetic>
          <Magnetic
            intensity={0.2}
            springOptions={{ bounce: 0.1 }}
            actionArea="global"
            range={100}
          >
            <Button
              size="lg"
              variant="secondary"
              className="text-md font-semibold"
              onClick={() => handleClickButton("LIKEDIN")}
            >
              <Linkedin /> Linkedin
            </Button>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}
