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

const MeetingCard = () => {
  return (
    <Card className="max-w-[482px] w-full">
      <CardHeader>
        <CardTitle>
          <Badge className="text-[#7839EE] text-xs font-[500] bg-[#ECE9FECC] rounded-[6px]">
            In 15 mins
          </Badge>
        </CardTitle>
        <CardAction>
          <div className="bg-[#ECE9FECC] rounded-[6px] p-1">
            <Video className="w-3.5 h-3.5" color="#7839EE" />
          </div>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          <h1 className="text-[#292929] font-[500] text-sm leading-5">
            Engineering sync
          </h1>
          <p className="text-[#737373] text-[13px]">1:30 PM → 2:30 PM</p>
        </div>
      </CardContent>
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
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
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
          <div>bar strip</div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MeetingCard;
