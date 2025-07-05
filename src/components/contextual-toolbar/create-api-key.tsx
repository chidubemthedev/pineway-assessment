import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { motion } from "motion/react";

type Props = {
  layoutId?: string;
};

const CreateApiKey = ({ layoutId }: Props) => {
  return (
    <motion.div>
      <Card>
        <CardHeader>
          <CardTitle
            layout
            className="text-[#292929] font-[500] text-sm leading-5"
          >
            Create new API key
          </CardTitle>
          <CardDescription layout>
            Your secret API Key will be shared with all users belonging to your
            organization.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Input placeholder="API key name" />
          </div>
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

export default CreateApiKey;
