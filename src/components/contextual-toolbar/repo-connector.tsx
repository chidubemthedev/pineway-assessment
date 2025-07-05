import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { motion } from "motion/react";

const items = [
  {
    id: "created",
    label: "Deployment created",
  },
  {
    id: "error",
    label: "Deployment error",
  },
  {
    id: "cancelled",
    label: "Deployment cancelled",
  },
];

type Props = {
  layoutId?: string;
};

const RepoConnector = ({ layoutId }: Props) => {
  return (
    <motion.div>
      <Card className="bg-[#FCFCFC]">
        <CardHeader>
          <CardTitle
            layout
            className="text-[#292929] font-[500] text-sm leading-5"
          >
            Connect repositories to{" "}
            <Badge className="text-[#7839EE] text-xs font-[500] bg-[#ECE9FECC] rounded-[6px]">
              acme
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <motion.div layout className="space-y-2">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Checkbox />
                <Label className="text-[#737373] text-[13px]">
                  {item.label}
                </Label>
              </div>
            ))}
          </motion.div>
        </CardContent>
        <CardFooter className="flex gap-2 justify-end">
          <motion.div layout layoutId="cancel">
            <Button variant={"ghost"}>Cancel</Button>
          </motion.div>

          <motion.div layout layoutId={layoutId}>
            <Button>Connect repositories</Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default RepoConnector;
