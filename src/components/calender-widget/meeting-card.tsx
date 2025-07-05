"use client";
import { Globe, Video } from "lucide-react";
import { Badge } from "../ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const members = [
  {
    name: "Jerry N.",
    avatar: "https://github.com/shadcn.png",
    fallback: "CN",
    extra: "jerry -5 hrs / gmt+8",
  },
  {
    name: "Debbie R.",
    avatar: "https://github.com/leerob.png",
    fallback: "LR",
    extra: "debbie -2 hrs / gmt-5",
  },
  {
    name: "Evil Rabbit",
    avatar: "https://github.com/evilrabbit.png",
    fallback: "ER",
    extra: "your time / gmt-3",
  },
];
const TOTAL_BARS = 7;

const MeetingCard = () => {
  const [expanded, setExpanded] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [animateAvatar, setAnimateAvatar] = useState(false);

  return (
    <motion.div
      onClick={() => setExpanded(!expanded)}
      layout
      style={{ maxWidth: 482, width: expanded ? "100%" : "fit-content" }}
      className="hover:cursor-pointer"
    >
      <Card>
        <CardHeader className="flex items-start justify-between">
          <CardTitle layout>
            <Badge className="text-[#7839EE] text-xs font-[500] bg-[#ECE9FECC] rounded-[6px]">
              In 15 mins
            </Badge>
          </CardTitle>
          {expanded && (
            <CardAction>
              <div className="bg-[#ECE9FECC] rounded-[6px] p-1">
                <Video className="w-3.5 h-3.5" color="#7839EE" />
              </div>
            </CardAction>
          )}
        </CardHeader>
        <CardContent className="flex items-start">
          <motion.div layout className="space-y-1">
            <h1 className="text-[#292929] font-[500] text-sm leading-5">
              Engineering sync
            </h1>
            <p className="text-[#737373] text-[13px]">1:30 PM → 2:30 PM</p>
          </motion.div>
        </CardContent>
        {expanded && (
          <CardFooter className="flex flex-col items-start gap-2 border-t overflow-hidden">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-[9px]">
                <h1 className="text-[#292929] font-[500] text-sm leading-5">
                  Guests
                </h1>
                <div className="flex items-center gap-[7px]">
                  <Globe color="#A3A3A3" className="w-3.5 h-3.5" />
                  <span className="text-[#525252] text-sm leading-5">
                    {members.length}
                  </span>
                </div>
              </div>
              <p
                className={cn(
                  "text-[#737373] text-[13px] transition-opacity duration-300 font-mono",
                  hoveredIdx !== null ? "opacity-100" : "opacity-0"
                )}
              >
                {hoveredIdx !== null ? members[hoveredIdx].extra : ""}
              </p>
            </div>
            <div className="flex items-center justify-between w-full">
              <motion.div
                layout
                className={
                  "flex *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:ring-2"
                }
              >
                {members.map((member, idx) => (
                  <motion.div
                    key={member.fallback}
                    animate={{
                      marginLeft: idx === 0 ? 0 : animateAvatar ? 8 : -8,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{ zIndex: hoveredIdx === idx ? 10 : undefined }}
                  >
                    <Avatar
                      className={
                        hoveredIdx === idx
                          ? "outline-2 outline-[#7839EE] z-10"
                          : ""
                      }
                    >
                      <AvatarImage
                        src={member.avatar}
                        alt={`@${member.fallback}`}
                      />
                      <AvatarFallback>{member.fallback}</AvatarFallback>
                    </Avatar>
                  </motion.div>
                ))}
              </motion.div>
              <div className="flex gap-[6px]">
                {Array.from({ length: TOTAL_BARS }).map((_, idx) => {
                  const isActive = idx < members.length;
                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => {
                        if (isActive) {
                          setAnimateAvatar(true);
                          setHoveredIdx(idx);
                        }
                      }}
                      onMouseLeave={() => {
                        setAnimateAvatar(false);
                        setHoveredIdx(null);
                      }}
                      className={cn(
                        "w-2 h-7 rounded-full transition-colors",
                        isActive
                          ? "bg-[#E5E5E5] cursor-pointer"
                          : "bg-[#F5F5F5]"
                      )}
                    />
                  );
                })}
              </div>
            </div>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
};

export default MeetingCard;
