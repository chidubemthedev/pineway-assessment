"use client";
import { Globe, Video } from "lucide-react";
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
      <div className="border rounded-xl shadow-sm bg-white">
        <div className="p-4 flex justify-between items-start">
          <motion.div layout>
            <span className="text-[#7839EE] text-xs font-[500] bg-[#ECE9FECC] rounded-[6px] px-2 py-1">
              In 15 mins
            </span>
          </motion.div>
          {expanded && (
            <div className="bg-[#ECE9FECC] rounded-[6px] p-1">
              <Video className="w-3.5 h-3.5" color="#7839EE" />
            </div>
          )}
        </div>

        <div className="px-4 pb-4 flex items-start">
          <motion.div layout className="space-y-1">
            <h1 className="text-[#292929] font-[500] text-sm leading-5">
              Engineering sync
            </h1>
            <p className="text-[#737373] text-[13px]">1:30 PM → 2:30 PM</p>
          </motion.div>
        </div>

        {expanded && (
          <div className="px-4 pt-2 pb-4 border-t flex flex-col items-start gap-2">
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
              <div className="flex -space-x-2">
                <div className="relative w-6 h-6 rounded-full overflow-hidden ring-2 ring-white">
                  <img
                    className="w-full h-full object-cover"
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </div>
                <div className="relative w-6 h-6 rounded-full overflow-hidden ring-2 ring-white">
                  <img
                    className="w-full h-full object-cover"
                    src="https://github.com/leerob.png"
                    alt="@leerob"
                  />
                </div>
                <div className="relative w-6 h-6 rounded-full overflow-hidden ring-2 ring-white">
                  <img
                    className="w-full h-full object-cover"
                    src="https://github.com/evilrabbit.png"
                    alt="@evilrabbit"
                  />
                </div>
              </div>
              <div>bar strip</div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MeetingCard;
