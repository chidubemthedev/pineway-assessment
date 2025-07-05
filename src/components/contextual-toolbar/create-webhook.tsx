import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { motion } from "motion/react";

const events = [
  {
    id: "created",
    label: "Deployment created",
  },
  {
    id: "prjectCreated",
    label: "Project created",
  },
  {
    id: "error",
    label: "Deployment error",
  },
  {
    id: "projectDeleted",
    label: "Project deleted",
  },
  {
    id: "cancelled",
    label: "Deployment cancelled",
  },
];

type Props = {
  layoutId?: string;
};

const CreateWebhook = ({ layoutId }: Props) => {
  return (
    <motion.div>
      <h1 className="text-[#292929] font-[500] text-sm leading-5 mb-2.5">
        Create webhook
      </h1>
      <Card className="bg-[#FCFCFC]">
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <Label>Endpoint</Label>
            <Input placeholder="https://myapp.com/webhooks" />
          </div>

          <motion.div layoutId="center" className="space-y-2">
            <h1 className="text-[#292929] font-[500] text-sm leading-5">
              Projects
            </h1>
            <RadioGroup
              defaultValue="option-one"
              className="grid grid-cols-2 gap-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">
                  All team projects in{" "}
                  <Badge className="text-[#7839EE] text-xs font-[500] bg-[#ECE9FECC] rounded-[6px]">
                    acme
                  </Badge>
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Tagged projects</Label>
              </div>
            </RadioGroup>
          </motion.div>

          <div className="space-y-2">
            <h1 className="text-[#292929] font-[500] text-sm leading-5">
              Events
            </h1>
            <div className="grid grid-cols-2 gap-2 bg-[#F5F5F5] rounded-[10px] p-3">
              {events.map((event, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Checkbox />
                  <Label className="text-[#737373] text-[13px]">
                    {event.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex gap-2 justify-end">
          <motion.div layout layoutId="cancel">
            <Button variant={"ghost"}>Cancel</Button>
          </motion.div>

          <motion.div layout layoutId={layoutId}>
            <Button>Create webhook</Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CreateWebhook;
