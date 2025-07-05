"use client";
import { useEffect, useState } from "react";
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
import { motion } from "motion/react";

type Props = {
  layoutId?: string;
};

const ShareWorkspace = ({ layoutId }: Props) => {
  const [share, setShare] = useState(true);
  const value = "/mylink.com";

  useEffect(() => {
    console.log(share);
  }, [share]);

  return (
    <motion.div>
      <Card>
        <CardHeader className="flex flex-col">
          {!share && (
            <CardTitle
              layout
              className="text-[#292929] font-[500] text-sm leading-5"
            >
              Sharing is off
            </CardTitle>
          )}
        </CardHeader>
        <CardContent>
          {!share && (
            <div className="flex gap-4">
              <CardDescription layout>
                Your secret API Key will be shared with all users belonging to
                your organization.
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
            <div className="space-y-2">
              <div className="flex gap-4 justify-between">
                <CardTitle
                  layout
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
              <Input value={value} />
              <Button variant={"outline"}>Copy</Button>
            </div>
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
