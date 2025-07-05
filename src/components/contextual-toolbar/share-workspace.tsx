"use client";
import { CheckCircle2, Copy } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";

type Props = {
  layoutId?: string;
};

const ShareWorkspace = ({ layoutId }: Props) => {
  const [share, setShare] = useState(false);
  const value = "/mylink.com";

  const onCopy = () => {
    navigator.clipboard.writeText(value);
    toast("Link to secret key copied!", {
      className: "toast",
      icon: <CheckCircle2 color="#ffffff" fill="#17B26A" />,
    });
  };

  return (
    <motion.div>
      <Card className="bg-[#FCFCFC]">
        <CardHeader className="flex flex-col">
          {!share && (
            <CardTitle
              layout
              layoutId="switch-title"
              className="text-[#292929] font-[500] text-sm leading-5"
            >
              Sharing is off
            </CardTitle>
          )}
        </CardHeader>
        <CardContent>
          {!share && (
            <div className="flex gap-4">
              <CardDescription layoutId="desc">
                <motion.p layout>
                  Your secret API Key will be shared with all users belonging to
                  your organization.
                </motion.p>
              </CardDescription>
              <CardAction layout layoutId="switch">
                <Switch
                  checked={share}
                  onCheckedChange={() => setShare(!share)}
                />
              </CardAction>
            </div>
          )}
          {share && (
            <motion.div className="space-y-2">
              <div className="flex gap-4 justify-between">
                <CardTitle
                  layout
                  layoutId="switch-title"
                  className="text-[#292929] font-[500] text-sm leading-5"
                >
                  Sharing is on
                </CardTitle>
                <CardAction layout layoutId="switch">
                  <Switch
                    checked={share}
                    onCheckedChange={() => setShare(!share)}
                  />
                </CardAction>
              </div>
              <motion.div layout layoutId="desc" className="space-y-2">
                <Input value={value} />
                <Button onClick={onCopy} variant={"outline"}>
                  <Copy />
                  Copy
                </Button>
              </motion.div>
            </motion.div>
          )}
        </CardContent>
        <CardFooter className="flex gap-2 justify-end">
          <motion.div layout layoutId="cancel">
            <Button variant={"ghost"}>Cancel</Button>
          </motion.div>

          <motion.div layout layoutId={layoutId}>
            <Button>Create secret key</Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ShareWorkspace;
