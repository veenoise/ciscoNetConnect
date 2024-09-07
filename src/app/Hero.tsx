"use client"

import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import PulsatingButton from "@/components/magicui/pulsating-button";
import { ArrowDown } from "lucide-react";
import AvatarCircles from "@/components/magicui/avatar-circles";

const Hero = () => {
  const avatarUrls = [
    "https://avatars.githubusercontent.com/u/16860528",
    "https://avatars.githubusercontent.com/u/20110627",
    "https://avatars.githubusercontent.com/u/106103625",
    "https://avatars.githubusercontent.com/u/59228569",
  ];
  
  return (
    <div className="h-[calc(100vh_-_64px)] w-full relative flex items-center justify-center" id="hero">
      <AnimatedGridPattern
        numSquares={50}
        maxOpacity={0.2}
        duration={1}
        repeatDelay={0.5}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 skew-y-12",
        )}
      />
      <div>
        <h1 className="text-5xl font-bold tracking-wider text-center">Cisco NetConnect</h1>
        <p className="text-center text-lg">Powered by <span className="font-bold text-xl">50+</span> enthusiasts</p>
        <AvatarCircles 
          numPeople={99} 
          avatarUrls={avatarUrls} 
          className="justify-center"
        />
        <div className="flex justify-center mt-5">
          <ArrowDown 
            className="text-[#252525]"
          />
        </div>
        <div className="flex justify-center mt-5">
          <PulsatingButton 
            className="bg-purple-700"
            pulseColor="rgb(126 34 206)"
          >Join the team!</PulsatingButton>
        </div>
      </div>
    </div>
  )
}

export default Hero;