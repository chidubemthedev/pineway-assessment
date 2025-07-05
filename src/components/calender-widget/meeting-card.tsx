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

const MeetingCard = () => {
  const [expanded, setExpanded] = useState(false);

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
          <CardFooter className="flex flex-col items-start gap-2 border-t">
            <div className="flex items-center gap-[9px]">
              <h1 className="text-[#292929] font-[500] text-sm leading-5">
                Guests
              </h1>
              <div className="flex items-center gap-[7px]">
                <Globe color="#A3A3A3" className="w-3.5 h-3.5" />
                <span className="text-[#525252] text-sm leading-5">3</span>
              </div>
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/leerob.png"
                    alt="@leerob"
                  />
                  <AvatarFallback>LR</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/evilrabbit.png"
                    alt="@evilrabbit"
                  />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
              </div>

              <div className="flex gap-[6px]">
                <div className="w-2 h-7 bg-[#E5E5E5] rounded-full" />
                <div className="w-2 h-7 bg-[#E5E5E5] rounded-full" />
                <div className="w-2 h-7 bg-[#E5E5E5] rounded-full" />
                <div className="w-2 h-7 bg-[#E5E5E5] rounded-full" />
                <div className="w-2 h-7 bg-[#E5E5E5] rounded-full" />
                <div className="w-2 h-7 bg-[#E5E5E5] rounded-full" />
                <div className="w-2 h-7 bg-[#E5E5E5] rounded-full" />
                <div className="w-2 h-7 bg-[#E5E5E5] rounded-full" />
              </div>
            </div>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
};

export default MeetingCard;
