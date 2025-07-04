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
import { Switch } from "../ui/switch";

const ShareWorkspace = () => {
  return (
    <Card>
      <CardHeader className="flex flex-col">
        <CardTitle className="text-[#292929] font-[500] text-sm leading-5">
          Sharing is off
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4">
          <CardDescription>
            Your secret API Key will be shared with all users belonging to your
            organization.
          </CardDescription>
          <CardAction>
            <Switch />
          </CardAction>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 justify-end">
        <Button variant={"ghost"}>Cancel</Button>
        <Button>Create secret key</Button>
      </CardFooter>
    </Card>
  );
};

export default ShareWorkspace;
