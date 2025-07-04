import { Badge } from "../ui/badge";

const items = ["React", "Tailwind css", "Motion (prev. framer motion)"];

const BadgeList = () => {
  return (
    <div className="flex gap-2">
      {items.map((item, index) => (
        <Badge
          key={index}
          variant={"secondary"}
          className="text-[#737373] text-[13px] rounded-[8px]"
        >
          {item}
        </Badge>
      ))}
    </div>
  );
};

export default BadgeList;
